<template>
  <!-- begin .chat-->
  <div ref="scroll" class="chat scrollbar">
    <b-upload-file />
    <div class="chat__messages">
      <b-message
        v-for="message in messages"
        :key="message.id"
        :message="message.content"
        :owner="message.owner"
        :timestamp="message.createdAt"
        :username="message.username"
        :pictures="message.pictures"
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
