<template>
  <!-- begin .message-donation-->
  <div class="message-donation" :class="modifiers" @contextmenu="openContextMenu">
    <div class="message-donation__logo">
      <svg-icon name="donationalerts" class="message-donation__logo-icon" />
    </div>
    <div class="message-donation__info">
      <div class="message-donation__top">
        <span class="message-donation__username">{{ donation.username }}</span>
        отправил
        <span class="message-donation__amount">{{ donation.amount }} {{ donation.currency }}</span>
      </div>
      <template v-if="donation.message">
        <div class="message-donation__bottom">
          <div class="message-donation__text">
            {{ donation.message }}
          </div>
        </div>
      </template>
    </div>
  </div>
  <!-- end .message-donation-->
</template>

<script lang="ts">
import { Component, InjectReactive, Prop, Vue } from 'nuxt-property-decorator';
import { DonationJson, Message } from '~/types/message';
import BContextMenu from '~/components/context-menu/context-menu.vue';

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

  @InjectReactive('message-context-menu')
  readonly contextMenu?: BContextMenu;

  get modifiers(): string[] {
    const modifiers: string[] = [];
    if (this.message.deletedAt) modifiers.push('message-donation_type_deleted');
    return modifiers;
  }

  get donation(): DonationJson {
    return this.message.json as DonationJson;
  }

  openContextMenu(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.contextMenu?.open(event, { message: this.message });
  }
}
</script>

<style lang="stylus" src="./message-donation.styl" />
