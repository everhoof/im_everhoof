<template>
  <!-- begin .message-->
  <div class="message" :class="{ message_view_compact: compact }">
    <div v-show="separator" class="message__separator">
      <span class="message__separator-date">{{ date }}</span>
    </div>
    <img v-if="avatar" :src="avatar" class="message__avatar" />
    <div
      v-else
      class="message__avatar message__avatar_type_default"
      :style="{ backgroundColor: avatarColor }"
    >
      {{ username[0] }}
    </div>
    <div class="message__content">
      <div v-if="compact" class="message__header">
        <time class="message__timestamp" :datetime="timestamp" :title="localDateTimeFull">
          {{ localDateTime }}
        </time>
        <router-link to="/" class="message__author-name link_no_styles" :style="{ color: avatarColor }">
          {{ username + ':' }}
        </router-link>
      </div>
      <div v-else class="message__header">
        <router-link to="/" class="message__author-name link_no_styles">
          {{ username }}
        </router-link>
        <time class="message__timestamp" :datetime="timestamp" :title="localDateTimeFull">
          {{ localDateTime }}
        </time>
      </div>
      <div class="message__body">
        <span class="message__text" v-html="text" />
        <img
          v-for="picture in pictures"
          :key="picture.id"
          :src="picture.m.link"
          class="message__image"
          :width="picture.m.width"
          :height="picture.m.height"
          @click="openPicture(picture)"
        />
      </div>
    </div>
  </div>
  <!-- end .message-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import { Picture, User } from '~/graphql/schema';
import { toLocalDateTime } from '~/tools/filters';
import { getUserColor } from '~/tools/util';

@Component({
  name: 'b-message',
})
export default class Message extends Vue {
  @Prop({ type: String }) message!: string;
  @Prop({ type: Array, default: () => [] }) pictures!: Picture[];
  @Prop({ type: Object }) owner?: User;
  @Prop({ type: String }) username!: string;
  @Prop({ type: String }) timestamp!: string;
  @Prop({ required: false, type: Boolean, default: false }) separator!: boolean;

  get text() {
    const message = this.message.replace(
      /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*))/gm,
      '<a href="$1" target="_blank">$1</a>',
    );
    const emojiRegex = new RegExp(`:(${this.$accessor.chat.emoji.map(({ name }) => name).join('|')}):`, 'mg');
    return message.replace(emojiRegex, (_match, p1) => {
      const emoji = this.$accessor.chat.emoji.find((e) => e.name === p1);
      if (!emoji) return p1;
      return `<img src="/emoji/${emoji.name}.${emoji.ext}" class="message__emoji" title=":${emoji.name}:"/>`;
    });
  }

  get compact() {
    return true;
  }

  get avatar() {
    return this.owner?.avatar?.s.link;
  }

  get avatarColor() {
    return getUserColor(this.owner?.id);
  }

  get localDateTime(): string {
    return toLocalDateTime(this.timestamp, this.compact);
  }

  get date(): string {
    return DateTime.fromISO(this.timestamp).toFormat('dd LLLL yyyy');
  }

  get localDateTimeFull(): string {
    return DateTime.fromISO(this.timestamp).toFormat('cccc, dd LLLL yyyy г., HH:mm');
  }

  openPicture(picture: Picture) {
    const limits = { width: 1000, height: 1000 };
    const dimensions = { width: picture.o.width, height: picture.o.height };
    if (picture.o.width > limits.width || picture.o.height > limits.height) {
      if (picture.o.width > picture.o.height) {
        dimensions.width = limits.width;
        dimensions.height = picture.o.height * (limits.width / picture.o.width);
      } else {
        dimensions.height = limits.height;
        dimensions.width = picture.o.width * (limits.height / picture.o.height);
      }
    }
    window.open(
      picture.o.link,
      picture.o.link,
      `height=${dimensions.height}px,width=${dimensions.width}px,resizable=1`,
    );
  }
}
</script>

<style lang="stylus" src="./message.styl" />
