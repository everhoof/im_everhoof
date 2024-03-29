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
        <div v-for="i in messages.length" :key="messages[messages.length - i].randomId" class="chat__message">
          <template v-if="separators.includes(messages[messages.length - i].id)">
            <b-messages-separator :message="messages[messages.length - i]" />
          </template>
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
import { DateTime } from 'luxon';
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

  get timeZone(): string {
    return this.$accessor.settings.timeZone;
  }

  get separators(): number[] {
    const separators: number[] = [];

    for (let i = 1; i < this.messages.length; ++i) {
      const message = this.messages[i];
      const prevMessage = this.messages[i - 1];

      const date = DateTime.fromISO(message.createdAt).setZone(this.timeZone).toISODate();
      const prevDate = DateTime.fromISO(prevMessage.createdAt).setZone(this.timeZone).toISODate();

      if (date !== prevDate) {
        separators.push(prevMessage.id);
      }
    }

    return separators;
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
    } else if (event.target.scrollHeight - event.target.clientHeight - event.target.scrollTop < 50) {
      this.$accessor.messages.CLEAR_MESSAGES();
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
