<template>
  <!-- begin .footer-->
  <div class="footer">
    <div v-if="showProgress" class="footer__progress-bar">
      <b-progress-bar :progress="progress" />
    </div>
    <div v-show="emojisPanelActive" ref="emojiPanel" class="footer__emoji-panel scrollbar">
      <b-emoji-panel @insert="insertEmoji" />
    </div>
    <div v-show="attachPanelActive" ref="attachPanel" class="footer__attach-panel">
      <b-attach-panel />
    </div>
    <b-button v-show="!loggedIn" class="button_size_compact" :to="{ name: 'modal_login' }">
      Войти в чат
    </b-button>
    <div v-show="loggedIn" class="footer__input-field">
      <div class="footer__actions-left">
        <div
          ref="emoji"
          class="footer__actions-button footer__emoji-button"
          :class="{ 'footer__actions-button_type_active': emojisPanelActive }"
          @click="$accessor.TOGGLE_EMOJIS_PANEL()"
        />
        <svg-icon
          ref="attach"
          name="attach_file"
          class="footer__actions-button footer__attach-button"
          :class="{ 'footer__actions-button_type_active': attachPanelActive }"
          @click="attachEmojiClicked"
        />
      </div>
      <div class="footer__input-container">
        <b-rich-input
          ref="richInput"
          class="footer__input"
          placeholder="Введите сообщение"
          @enter="createMessage"
        />
      </div>
      <div v-show="loggedIn" class="footer__actions-right" @click="createMessage">
        <b-donate-button class="footer__donate-button" />
        <button class="footer__actions-button footer__send-button">
          <svg-icon name="paper_plane" />
        </button>
      </div>
    </div>
  </div>
  <!-- end .footer-->
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import axios from 'axios';
import { getRandomIntInRange } from '~/tools/util';
import BEmojiPanel from '~/components/emoji-panel/emoji-panel.vue';
import BAttachPanel from '~/components/attach-panel/attach-panel.vue';
import BButton from '~/components/button/button.vue';
import CreateMessage from '~/graphql/mutations/create-message.graphql';
import { CreateMessageMutation, CreateMessageMutationVariables } from '~/graphql/schema';
import { HttpClient } from '~/tools/http-client';
import BProgressBar from '~/components/progress-bar/progress-bar.vue';
import BDonateButton from '~/components/donate-button/donate-button.vue';
import { Message } from '~/types/message';
import BRichInput from '~/components/rich-input/rich-input.vue';
import type { MentionEvent } from '~/store/messages';

@Component({
  name: 'b-footer',
  components: { BRichInput, BDonateButton, BButton, BAttachPanel, BEmojiPanel, BProgressBar },
})
export default class Footer extends Vue {
  @Ref() emoji!: HTMLDivElement;
  @Ref() emojiPanel!: HTMLDivElement;
  @Ref() attach!: HTMLDivElement;
  @Ref() attachPanel!: HTMLDivElement;
  @Ref() inputEl!: HTMLInputElement;
  @Ref() richInput!: BRichInput;
  private attachIds: number[] = [];
  private progress: number = 0;
  private showProgress: boolean = false;

  get loggedIn(): boolean {
    return this.$accessor.auth.loggedIn;
  }

  get emojisPanelActive(): boolean {
    return this.$accessor.emojisPanelActive;
  }

  get attachPanelActive(): boolean {
    return this.$accessor.attachPanelActive;
  }

  changeEmoji() {
    const options = {
      rows: 5,
      cols: 11,
      count: 50,
      size: 24,
    };

    const emojiIndex: number = getRandomIntInRange(1, options.count);
    const y: number = Math.floor((emojiIndex - 1) / options.cols) + 1;
    const x: number = emojiIndex - options.cols * (y - 1);
    this.emoji.style.backgroundPosition = `-${(x - 1) * options.size}px -${(y - 1) * options.size}px`;
  }

  created(): void {
    if (process.client) {
      this.$nuxt.$on('file-drag', this.onFileDragEvent);
      this.$nuxt.$on('mention', this.onMention);
    }
  }

  mounted(): void {
    document.body.addEventListener('click', this.onDocumentClick);
    document.addEventListener('paste', this.onDocumentPaste);
  }

  beforeDestroy(): void {
    if (process.client) {
      this.$nuxt.$off('file-drag', this.onFileDragEvent);
      this.$nuxt.$off('mention', this.onMention);
      document.body.removeEventListener('click', this.onDocumentClick);
      document.removeEventListener('paste', this.onDocumentPaste);
    }
  }

  onDocumentClick(event: MouseEvent): void {
    if (!this.emoji.contains(event.target as Node) && !this.emojiPanel.contains(event.target as Node))
      this.$accessor.SET_EMOJIS_PANEL_ACTIVE(false);
    if (!this.attach.contains(event.target as Node) && !this.attachPanel.contains(event.target as Node))
      this.$accessor.SET_ATTACH_PANEL_ACTIVE(false);
  }

  async onDocumentPaste(event: ClipboardEvent): Promise<void> {
    if (!this.loggedIn) return;

    const item = event.clipboardData?.items?.[0];
    if (item?.kind === 'file' && /^image\/*/.test(item.type)) {
      const file = item.getAsFile();
      if (file) {
        await this.uploadPicture(file);
      }
    }
  }

  onMention(event: MentionEvent): void {
    this.richInput.mention(event);
  }

  async onFileDragEvent(event: DragEvent): Promise<void> {
    if (!this.loggedIn) return;

    const item = event.dataTransfer?.items?.[0];
    if (item?.kind === 'file' && /^image\/*/.test(item.type)) {
      const file = item.getAsFile();
      if (file) {
        await this.uploadPicture(file);
      }
    }
  }

  insertEmoji(content: string): void {
    this.richInput.insertContent(content);
  }

  attachEmojiClicked() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();
    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];

      if (!file) return;

      await this.uploadPicture(file);
    });
  }

  async uploadPicture(file: File): Promise<void> {
    if (this.showProgress) return;

    try {
      this.showProgress = true;
      const attachId = await HttpClient.uploadPicture(file, {
        onUploadProgress: (event) => {
          this.progress = Math.floor((100 / event.total) * event.loaded);
        },
      });

      if (!attachId) return;

      this.attachIds.push(attachId);
      await this.createMessage();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data.message) {
          this.$snotify.error(error.response.data.message);
        }
      }
    } finally {
      this.showProgress = false;
      this.progress = 0;
    }
  }

  async createMessage() {
    const text = this.richInput.getText();

    if (!text.trim() && this.attachIds.length === 0) return;

    const html = this.richInput.getHtml();
    const message = Message.create(html, this.$accessor.auth.user);

    this.$accessor.messages.ADD_RAW_MESSAGE_TO_START(message);
    this.richInput.setContent('');

    const createdMessage = await this.$apollo.mutate<CreateMessageMutation, CreateMessageMutationVariables>({
      mutation: CreateMessage,
      variables: {
        content: message.content,
        randomId: message.randomId,
        pictures: this.attachIds,
      },
    });

    if (createdMessage.errors) {
      if (!message.randomId) return;
      this.$accessor.messages.DELETE_MESSAGE_BY_RANDOM_ID(message.randomId);
    }

    this.attachIds = [];
    this.$nuxt.$emit('force-scroll');
  }
}
</script>

<style lang="stylus" src="./footer.styl" />
