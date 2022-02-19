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
import { DonationJson, Message } from '~/types/message';

@Component({
  name: 'b-message-donation',
})
export default class MessageDonation extends Vue {
  @Prop({
    required: true,
    type: Object,
    default: () => {},
  })
  readonly message!: Message;

  get donation(): DonationJson {
    return this.message.json as DonationJson;
  }
}
</script>

<style lang="stylus" src="./message-donation.styl" />
