<template>
  <!-- begin .chat-->
  <div ref="scroll" class="chat scrollbar" @scroll="onScroll">
    <b-upload-file />
    <div class="chat__messages">
      <div v-if="loadingMoreMessages" class="chat__loader">
        <svg-icon name="spinner" />
      </div>
      <div v-for="i in messages.length" :key="messages[messages.length - i].id" class="chat__message">
        <b-messages-separator
          v-if="messages[messages.length - i].dayFirst"
          :message="messages[messages.length - i]"
        />
        <b-message :message="messages[messages.length - i]" />
      </div>
    </div>
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'nuxt-property-decorator';
import BUploadFile from '~/components/upload-file/upload-file.vue';
import BMessage from '~/components/message/message.vue';
import BMessagesSeparator from '~/components/messages-separator/messages-separator.vue';
import { ChatMessage } from '~/types/messages';

@Component({
  name: 'b-chat',
  components: { BMessage, BMessagesSeparator, BUploadFile },
})
export default class Chat extends Vue {
  @Ref('scroll') scroll!: HTMLDivElement;

  private loadingMoreMessages = false;

  @Watch('messages')
  async onMessagesChange() {
    await this.$nextTick();
    if (Math.abs(this.scroll.scrollTop) < 50) {
      this.scroll.scrollTo({ top: this.scroll.scrollHeight });
    }
  }

  get messages(): ChatMessage[] {
    return this.$accessor.chat.messages;
  }

  async onScroll(event: any) {
    const offsetTop =
      event.target.scrollHeight - (Math.abs(event.target.scrollTop) + event.target.clientHeight);

    if (!this.loadingMoreMessages && offsetTop < 50) {
      this.loadingMoreMessages = true;

      try {
        const lastId = this.messages[this.messages.length - 1]?.id;
        await this.$accessor.chat.getMessages({ count: 50, reverse: true, lastId });
      } finally {
        await this.$nextTick();
        this.loadingMoreMessages = false;
      }
    }
  }
}
</script>

<style lang="stylus" src="./chat.styl" />
