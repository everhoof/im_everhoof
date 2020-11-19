<template>
  <!-- begin .footer-->
  <div class="footer">
    <div v-show="emojisPanelActive" ref="emojiPanel" class="footer__emoji-panel">
      <b-emoji-panel />
    </div>
    <div v-show="attachPanelActive" ref="attachPanel" class="footer__attach-panel">
      <b-attach-panel />
    </div>
    <b-button v-show="!loggedIn" @click="openLoginModal()"> Войти в чат </b-button>
    <div v-show="loggedIn" class="footer__input-field">
      <div v-show="false" class="footer__actions-left">
        <div
          ref="emoji"
          class="footer__actions-button footer__emoji-button"
          :class="{ 'footer__actions-button_type_active': emojisPanelActive }"
          @mouseover="changeEmoji"
          @click="$accessor.TOGGLE_EMOJIS_PANEL()"
        />
        <svg-icon
          ref="attach"
          name="attach_file"
          class="footer__actions-button footer__attach-button"
          :class="{ 'footer__actions-button_type_active': attachPanelActive }"
          @click="$accessor.TOGGLE_ATTACH_PANEL()"
        />
      </div>
      <input
        v-model="text"
        type="text"
        class="footer__input"
        placeholder="Введите сообщение"
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
import { getRandomIntInRange } from '~/tools/util';
import BEmojiPanel from '~/components/emoji-panel/emoji-panel.vue';
import BAttachPanel from '~/components/attach-panel/attach-panel.vue';
import BButton from '~/components/button/button.vue';
import CreateMessage from '~/graphql/mutations/create-message.graphql';
import { CreateMessageMutation, CreateMessageMutationVariables } from '~/graphql/schema';

@Component({
  name: 'b-footer',
  components: { BButton, BAttachPanel, BEmojiPanel },
})
export default class Footer extends Vue {
  @Ref() emoji!: HTMLDivElement;
  @Ref() emojiPanel!: HTMLDivElement;
  @Ref() attach!: HTMLDivElement;
  @Ref() attachPanel!: HTMLDivElement;

  text: string = '';

  get loggedIn(): boolean {
    return this.$accessor.auth.loggedIn;
  }

  get emojisPanelActive(): boolean {
    return this.$accessor.emojisPanelActive;
  }

  get attachPanelActive(): boolean {
    return this.$accessor.attachPanelActive;
  }

  openLoginModal() {
    this.$accessor.auth.SET_LOGIN_MODAL(true);
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

  async createMessage() {
    await this.$apollo.mutate<CreateMessageMutation, CreateMessageMutationVariables>({
      mutation: CreateMessage,
      variables: {
        content: this.text,
      },
    });
    this.text = '';
  }
}
</script>

<style lang="stylus" src="./footer.styl" />
