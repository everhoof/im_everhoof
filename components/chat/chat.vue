<template>
  <!-- begin .chat-->
  <div ref="scroll" class="chat scrollbar">
    <b-upload-file />
    <div class="chat__messages">
      <b-message
        v-for="i in messages.length"
        :key="messages[messages.length - i].id"
        :message="messages[messages.length - i].content"
        :owner="messages[messages.length - i].owner"
        :timestamp="messages[messages.length - i].createdAt"
        :username="messages[messages.length - i].username"
        :pictures="messages[messages.length - i].pictures"
      />
    </div>
  </div>
  <!-- end .chat-->
</template>

<script lang="ts">
import { Component, Ref, Vue, Watch } from 'nuxt-property-decorator';
import BUploadFile from '~/components/upload-file/upload-file.vue';
import BMessage from '~/components/message/message.vue';
import { GetChatDataQuery } from '~/graphql/schema';

@Component({
  name: 'b-chat',
  components: { BMessage, BUploadFile },
})
export default class Chat extends Vue {
  @Ref('scroll') scroll!: HTMLDivElement;

  @Watch('messages')
  async onMessagesChange() {
    await this.$nextTick();
    this.scroll.scrollTo({ top: this.scroll.clientHeight });
  }

  get messages(): GetChatDataQuery['getMessages'] {
    return this.$accessor.chat.messages;
  }
}
</script>

<style lang="stylus" src="./chat.styl" />
