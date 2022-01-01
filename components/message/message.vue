<template>
  <!-- begin .message-->
  <div
    class="message"
    :class="{
      message_view_compact: compact,
      message_type_system: system,
      message_type_deleted: deleted,
      'message_state_not-delivered': !delivered,
    }"
    @contextmenu="openContextMenu"
  >
    <img v-if="avatar" :src="avatar" class="message__avatar" />
    <div
      v-else
      class="message__avatar message__avatar_type_default"
      :style="{ backgroundColor: avatarColor }"
    >
      {{ message.username && message.username[0] }}
    </div>
    <div class="message__content">
      <span v-if="compact" class="message__header">
        <time class="message__timestamp" :datetime="timestamp" :title="localDateTimeFull">
          {{ localDateTime }}
        </time>
        <router-link
          :to="{ name: 'modal_profile', params: { id: ownerId } }"
          class="message__author-name link_no_styles"
          :style="{ color: avatarColor }"
        >
          {{ message.username + ':' }}
        </router-link>
      </span>
      <span v-else class="message__header">
        <router-link
          :to="{ name: 'modal_profile', params: { id: ownerId } }"
          class="message__author-name link_no_styles"
        >
          {{ message.username }}
        </router-link>
        <time class="message__timestamp" :datetime="timestamp" :title="localDateTimeFull">
          {{ localDateTime }}
        </time>
      </span>
      <span v-if="showUpdatingMessage" class="message__text">
        <b-message-update-input
          ref="messageUpdateInput"
          v-model="updatingMessageText"
          @save="saveMessage"
          @cancel="cancelUpdateMessage"
        />
      </span>
      <span v-else class="message__text" v-html="text" />
      <b-message-img v-for="picture in pictures" :key="picture.id" :picture="picture" />
    </div>
  </div>
  <!-- end .message-->
</template>

<script lang="ts">
import { Component, InjectReactive, Prop, Ref, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import { UpdateMessageMutation, UpdateMessageMutationVariables } from '~/graphql/schema';
import { toLocalDateTime } from '~/tools/filters';
import { getUserColor } from '~/tools/util';
import BContextMenu from '~/components/context-menu/context-menu.vue';
import { ChatMessage, ChatMessageState } from '~/types/messages';
import BMessageUpdateInput from '~/components/message-update-input/message-update-input.vue';
import UpdateMessage from '~/graphql/mutations/update-message.graphql';
import BMessageImg from '~/components/message-img/message-img.vue';

@Component({
  name: 'b-message',
  components: { BMessageImg, BMessageUpdateInput },
})
export default class Message extends Vue {
  @Ref()
  readonly messageUpdateInput!: BMessageUpdateInput;

  @InjectReactive('message-context-menu')
  readonly contextMenu!: BContextMenu;

  @Prop({
    required: true,
    type: Object,
    default: () => {},
  })
  readonly message!: ChatMessage;

  private updatingMessageText: string = '';
  private showUpdatingMessage: boolean = false;

  get text() {
    const message = this.message.content.replace(
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*))/gm,
      '<a href="$1" target="_blank">$1</a>',
    );
    const emojiRegex = new RegExp(`:(${this.$accessor.chat.emoji.map(({ name }) => name).join('|')}):`, 'mg');
    return message.replace(emojiRegex, (_match, p1) => {
      const emoji = this.$accessor.chat.emoji.find((e) => e.name === p1);
      if (!emoji) return p1;
      return `<img src="/emoji/${emoji.name}.${emoji.ext}" class="message__emoji" title=":${emoji.name}:" width="70px" height="70px" />`;
    });
  }

  get ownerId(): number {
    return this.message?.owner?.id || 0;
  }

  get pictures() {
    return this.message.pictures || [];
  }

  get timestamp() {
    return this.message.createdAt;
  }

  get compact() {
    return this.$accessor.settings.compact;
  }

  get system() {
    return this.message.system;
  }

  get delivered(): boolean {
    return this.message.state === undefined || this.message.state === ChatMessageState.delivered;
  }

  get avatar() {
    return this.message?.owner?.avatar?.s.link;
  }

  get avatarColor() {
    return getUserColor(this.message?.owner?.id);
  }

  get localDateTime(): string {
    return toLocalDateTime(this.timestamp, this.compact);
  }

  get localDateTimeFull(): string {
    return DateTime.fromISO(this.timestamp).toFormat('cccc, dd LLLL yyyy г., HH:mm');
  }

  get deleted(): boolean {
    return !!this.message.deletedAt;
  }

  cancelUpdateMessage() {
    this.showUpdatingMessage = false;
  }

  async onMessageUpdating(message: ChatMessage) {
    if (message.id !== this.message.id) return;

    this.showUpdatingMessage = true;
    this.updatingMessageText = message.content;

    await this.$nextTick();
    this.messageUpdateInput.focus();
  }

  async saveMessage() {
    this.showUpdatingMessage = false;

    if (this.message.content === this.updatingMessageText || !this.updatingMessageText) return;

    const { errors } = await this.$apollo.mutate<UpdateMessageMutation, UpdateMessageMutationVariables>({
      mutation: UpdateMessage,
      variables: {
        messageId: this.message.id,
        content: this.updatingMessageText,
      },
    });

    if (errors) {
      if (errors[0] && errors[0].message) {
        this.message.content = errors && errors[0].message;
        this.message.system = true;
        this.$accessor.chat.ADD_MESSAGE(this.message);
      }
    }
  }

  mounted() {
    this.$bus.$on('message-updating', this.onMessageUpdating);
  }

  beforeDestroy() {
    this.$bus.$off('message-updating');
  }

  openContextMenu(event: MouseEvent) {
    if (this.message.system) return;
    if (
      this.$accessor.auth.can.deleteAny('message') ||
      (this.$accessor.auth.can.deleteOwn('message') && this.message.id === this.$accessor.auth.user?.id)
    ) {
      event.preventDefault();
      event.stopPropagation();
      this.contextMenu.open(event, { message: this.message });
    }
  }
}
</script>

<style lang="stylus" src="./message.styl" />
