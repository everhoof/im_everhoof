<template>
  <!-- begin .message-donation-->
  <div class="message-donation">
    <div class="message-donation__logo">
      <svg-icon name="donationalerts" class="message-donation__logo-icon" />
    </div>
    <div class="message-donation__info">
      <div class="message-donation__top">
        <span class="message-donation__username">{{ donation.username }}</span>
        отправил
        <span class="message-donation__amount">{{ donation.amount }} {{ donation.currency }}</span>
      </div>
      <div class="message-donation__bottom">
        <div class="message-donation__text">
          {{ donation.message }}
        </div>
      </div>
    </div>
  </div>
  <!-- end .message-donation-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { ChatMessage } from '~/types/messages';

interface Donation {
  id: number;
  username: string;
  message: string;
  amount: number;
  currency: string;
}

@Component({
  name: 'b-message-donation',
})
export default class MessageDonation extends Vue {
  @Prop({
    required: true,
    type: Object,
    default: () => {},
  })
  readonly message!: ChatMessage;

  get donation(): Donation {
    return JSON.parse(this.message.json || '{}') as Donation;
  }
}
</script>

<style lang="stylus" src="./message-donation.styl" />
