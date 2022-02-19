<template>
  <!-- begin .messages-separator-->
  <div class="messages-separator">
    <span class="messages-separator__date">{{ date }}</span>
  </div>
  <!-- end .messages-separator-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import { Message } from '~/types/message';

@Component({
  name: 'b-messages-separator',
})
export default class MessagesSeparator extends Vue {
  @Prop({
    required: true,
    type: Object,
    default: () => {},
  })
  private readonly message!: Message;

  get date(): string {
    return DateTime.fromISO(this.message.createdAt).toFormat('dd LLLL yyyy');
  }
}
</script>

<style lang="stylus" src="./messages-separator.styl" />
