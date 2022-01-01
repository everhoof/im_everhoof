<template>
  <!-- begin .footer-->
  <div class="footer">
    <div v-if="showProgress" class="footer__progress-bar">
      <b-progress-bar :progress="progress" />
    </div>
    <div v-show="emojisPanelActive" ref="emojiPanel" class="footer__emoji-panel scrollbar">
      <b-emoji-panel />
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
          v-if="true"
          ref="attach"
          name="attach_file"
          class="footer__actions-button footer__attach-button"
          :class="{ 'footer__actions-button_type_active': attachPanelActive }"
          @click="attachEmojiClicked"
        />
      </div>
      <input
        :value="$accessor.chat.message"
        name="message"
        autocomplete="off"
        type="text"
        class="footer__input"
        placeholder="Введите сообщение"
        @input="input"
        @keydown.enter="createMessage"
      />
    </div>
    <div v-show="loggedIn" class="footer__actions-right" @click="createMessage">
      <svg-icon name="paper_plane" class="footer__actions-button footer__send-button" />
    </div>
  </div>
  <!-- end .footer-->
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import axios from 'axios';
import { getRandomIntInRange, getRandomString } from '~/tools/util';
import BEmojiPanel from '~/components/emoji-panel/emoji-panel.vue';
import BAttachPanel from '~/components/attach-panel/attach-panel.vue';
import BButton from '~/components/button/button.vue';
import CreateMessage from '~/graphql/mutations/create-message.graphql';
import { CreateMessageMutation, CreateMessageMutationVariables, User } from '~/graphql/schema';
import { ChatMessage, ChatMessageState } from '~/types/messages';
import { HttpClient } from '~/tools/http-client';
import BProgressBar from '~/components/progress-bar/progress-bar.vue';

@Component({
  name: 'b-footer',
  components: { BButton, BAttachPanel, BEmojiPanel, BProgressBar },
})
export default class Footer extends Vue {
  @Ref() emoji!: HTMLDivElement;
  @Ref() emojiPanel!: HTMLDivElement;
  @Ref() attach!: HTMLDivElement;
  @Ref() attachPanel!: HTMLDivElement;
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

  mounted() {
    document.body.addEventListener('click', (event: MouseEvent) => {
      if (!this.emoji.contains(event.target as Node) && !this.emojiPanel.contains(event.target as Node))
        this.$accessor.SET_EMOJIS_PANEL_ACTIVE(false);
      if (!this.attach.contains(event.target as Node) && !this.attachPanel.contains(event.target as Node))
        this.$accessor.SET_ATTACH_PANEL_ACTIVE(false);
    });
  }

  input(event: InputEvent) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.$accessor.chat.SET_MESSAGE(input.value);
  }

  attachEmojiClicked() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.click();
    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];

      if (!file) return;

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
      }

      this.showProgress = false;
      this.progress = 0;
    });
  }

  async createMessage() {
    if (!this.$accessor.chat.message.trim() && this.attachIds.length === 0) return;
    const randomId = getRandomString(32);
    const message: ChatMessage = {
      id: getRandomIntInRange(0, 10000),
      content: this.$accessor.chat.message,
      state: ChatMessageState.sent,
      system: false,
      randomId,
      username: this.$accessor.auth.user?.username,
      owner: this.$accessor.auth.user as User,
      createdAt: DateTime.local().toISO(),
      updatedAt: DateTime.local().toISO(),
      pictures: [],
    };

    this.$accessor.chat.ADD_MESSAGE(message);
    const content = this.$accessor.chat.message;
    this.$accessor.chat.SET_MESSAGE('');

    const createdMessage = await this.$apollo.mutate<CreateMessageMutation, CreateMessageMutationVariables>({
      mutation: CreateMessage,
      variables: {
        content,
        randomId,
        pictures: this.attachIds,
      },
    });

    if (createdMessage.errors) {
      if (!message.randomId) return;
      this.$accessor.chat.DELETE_MESSAGE_BY_RANDOM_ID(message.randomId);
    }

    this.attachIds = [];
  }
}
</script>

<style lang="stylus" src="./footer.styl" />
