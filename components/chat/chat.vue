<template>
  <!-- begin .chat-->
  <div ref="scroll" class="chat scrollbar" @scroll="onScroll">
    <!-- <b-upload-file /> -->
    <transition name="fade">
      <div v-show="loading" class="chat__loader">
        <img class="icon" src="~/assets/icons/spinner.svg" alt="" />
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!loading" class="chat__messages">
        <div v-if="loadingMoreMessages" class="chat__messages-loader">
          <img class="icon" src="~/assets/icons/spinner.svg" alt="" />
        </div>
        <div v-for="i in messages.length" :key="i" class="chat__message">
          <template v-if="messages[messages.length - i].type === 5">
            <b-message-donation :message="messages[messages.length - i]" />
          </template>
          <template v-else>
            <b-message :message="messages[messages.length - i]" />
          </template>
        </div>
      </div>
    </transition>
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'nuxt-property-decorator';
import BUploadFile from '~/components/upload-file/upload-file.vue';
import BMessage from '~/components/message/message.vue';
import BMessagesSeparator from '~/components/messages-separator/messages-separator.vue';
import BMessageDonation from '~/components/message-donation/message-donation.vue';
import { Message } from '~/types/message';

@Component({
  name: 'b-chat',
  components: { BMessageDonation, BMessagesSeparator, BMessage, BUploadFile },
})
export default class Chat extends Vue {
  @Ref('scroll') scroll?: HTMLDivElement;

  private loading = true;
  private loadingMoreMessages = false;

  @Watch('messages')
  async onMessagesChange(): Promise<void> {
    if (!this.scroll) return;
    const offsetBottom = this.scroll.scrollHeight - this.scroll.clientHeight - this.scroll.scrollTop;

    if (offsetBottom < 300) {
      await this.$nextTick();
      this.scrollDownChat();
    }
  }

  get messages(): Message[] {
    const messages = this.$accessor.messages.messages;

    if (this.loading) return [];
    return messages.filter((m) => this.$accessor.auth.can.readAny('deleted-message').granted || !m.deletedAt);
  }

  async mounted(): Promise<void> {
    this.loading = false;

    await this.$nextTick();
    window.setTimeout(this.scrollDownChat, 50);

    this.$nuxt.$on('force-scroll', this.scrollDownChat);
  }

  beforeDestroy(): void {
    this.$nuxt.$off('force-scroll', this.scrollDownChat);
  }

  scrollDownChat(): void {
    if (this.scroll) {
      this.scroll.scrollTop = this.scroll.scrollHeight;
    }
  }

  async onScroll(event: any) {
    if (!this.loadingMoreMessages && event.target.scrollTop < 100) {
      this.loadingMoreMessages = true;
      await this.$nextTick();

      try {
        const lastId = this.messages[this.messages.length - 1]?.id;
        const variables = {
          count: 50,
          reverse: true,
          lastId,
        };

        const messages = await this.$accessor.messages.fetchMessages(variables);

        const oldScrollTop = event.target.scrollTop;
        const oldScroll = event.target.scrollHeight - event.target.clientHeight;

        if (messages) {
          await this.$accessor.messages.pushMessages({
            variables,
            messages,
          });

          await this.$nextTick();
          const newScroll = event.target.scrollHeight - event.target.clientHeight;
          event.target.scrollTop = oldScrollTop + (newScroll - oldScroll);
        }
      } finally {
        this.loadingMoreMessages = false;
      }
    }
  }
}
</script>

<style lang="stylus" src="./chat.styl" />
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
