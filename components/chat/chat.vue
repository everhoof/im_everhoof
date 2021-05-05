<template>
  <!-- begin .chat-->
  <div ref="scroll" class="chat scrollbar">
    <b-upload-file />
    <div class="chat__messages">
      <component
        :is="messages[messages.length - i].id < 0 ? 'b-messages-separator' : 'b-message'"
        v-for="i in messages.length"
        :key="messages[messages.length - i].id"
        :message="messages[messages.length - i]"
      />
    </div>
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import BUploadFile from '~/components/upload-file/upload-file.vue';
import BMessage from '~/components/message/message.vue';
import BMessagesSeparator from '~/components/messages-separator/messages-separator.vue';
import { GetChatDataQuery } from '~/graphql/schema';

@Component({
  name: 'b-chat',
  components: { BMessage, BMessagesSeparator, BUploadFile },
})
export default class Chat extends Vue {
  @Ref('scroll') scroll!: HTMLDivElement;

  @Watch('messages')
  async onMessagesChange() {
    await this.$nextTick();
    this.scroll.scrollTo({ top: this.scroll.scrollHeight });
  }

  get messages(): GetChatDataQuery['getMessages'] {
    return this.$accessor.chat.messages
      .filter((message) => !message.deletedAt)
      .reduce<GetChatDataQuery['getMessages']>((acc, message, index, array) => {
        acc.push(message);
        if (array[index] && array[index + 1]) {
          const currentDay = DateTime.fromISO(array[index].createdAt).day;
          const nextDay = DateTime.fromISO(array[index + 1].createdAt).day;
          if (currentDay !== nextDay) {
            acc.push({ ...message, id: -message.id });
          }
        }
        return acc;
      }, []);
  }

  get isDayLastMessage() {
    return (index: number) => {
      if (this.messages[index] && this.messages[index + 1]) {
        const currentDay = DateTime.fromISO(this.messages[index].createdAt).day;
        const nextDay = DateTime.fromISO(this.messages[index + 1].createdAt).day;
        return currentDay !== nextDay;
      }
      return false;
    };
  }
}
</script>

<style lang="stylus" src="./chat.styl" />
