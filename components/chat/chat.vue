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
          <b-messages-separator
            v-if="messages[messages.length - i].dayFirst"
            :message="messages[messages.length - i]"
          />
          <b-message :message="messages[messages.length - i]" />
        </div>
      </div>
    </transition>
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import BUploadFile from '~/components/upload-file/upload-file.vue';
import BMessage from '~/components/message/message.vue';
import { ChatMessage } from '~/types/messages';
import BMessagesSeparator from '~/components/messages-separator/messages-separator.vue';

@Component({
  name: 'b-chat',
  components: { BMessagesSeparator, BMessage, BUploadFile },
})
export default class Chat extends Vue {
  @Ref('scroll') scroll?: HTMLDivElement;

  private loading = true;
  private loadingMoreMessages = false;

  async onMessagesChange(force: boolean = false) {
    await this.$nextTick();
    if (this.scroll && (Math.abs(this.scroll.scrollTop) < 300 || force)) {
      this.scroll.scrollTo({ top: this.scroll.scrollHeight });
    }
  }

  get messages(): ChatMessage[] {
    return this.loading
      ? []
      : this.$accessor.chat.messages.filter(
          (m: ChatMessage) => this.$accessor.auth.can.readAny('deleted-message').granted || !m.deletedAt,
        );
  }

  mounted() {
    this.loading = false;
    this.$bus.$on('message-added', this.onMessagesChange);
  }

  beforeDestroy() {
    this.$bus.$off('message-added');
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
