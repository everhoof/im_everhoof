<template>
  <!-- begin .footer-->
  <div class="footer">
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
          v-if="false"
          ref="attach"
          name="attach_file"
          class="footer__actions-button footer__attach-button"
          :class="{ 'footer__actions-button_type_active': attachPanelActive }"
          @click="$accessor.TOGGLE_ATTACH_PANEL()"
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
import { getRandomIntInRange, getRandomString } from '~/tools/util';
import BEmojiPanel from '~/components/emoji-panel/emoji-panel.vue';
import BAttachPanel from '~/components/attach-panel/attach-panel.vue';
import BButton from '~/components/button/button.vue';
import CreateMessage from '~/graphql/mutations/create-message.graphql';
import { CreateMessageMutation, CreateMessageMutationVariables, User } from '~/graphql/schema';
import { ChatMessage, ChatMessageState } from '~/types/messages';

@Component({
  name: 'b-footer',
  components: { BButton, BAttachPanel, BEmojiPanel },
})
export default class Footer extends Vue {
  @Ref() emoji!: HTMLDivElement;
  @Ref() emojiPanel!: HTMLDivElement;
  @Ref() attach!: HTMLDivElement;
  @Ref() attachPanel!: HTMLDivElement;

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
      // if (!this.attach.contains(event.target as Node) && !this.attachPanel.contains(event.target as Node))
      //   this.$accessor.SET_ATTACH_PANEL_ACTIVE(false);
    });
  }

  input(event: InputEvent) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.$accessor.chat.SET_MESSAGE(input.value);
  }

  async createMessage() {
    if (!this.$accessor.chat.message.trim()) return;
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
    this.$bus.$emit('message-added', true);
    const content = this.$accessor.chat.message;
    this.$accessor.chat.SET_MESSAGE('');

    const { errors } = await this.$apollo.mutate<CreateMessageMutation, CreateMessageMutationVariables>({
      mutation: CreateMessage,
      variables: {
        content,
        randomId,
      },
    });

    if (errors) {
      if (errors[0] && errors[0].message) {
        message.content = errors && errors[0].message;
        message.system = true;
        this.$accessor.chat.ADD_MESSAGE(message);
      }
    }
  }
}
</script>

<style lang="stylus" src="./footer.styl" />
