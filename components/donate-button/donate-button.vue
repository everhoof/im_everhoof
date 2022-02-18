<template>
  <!-- begin .donate-button-->
  <a :href="link" target="_blank" class="donate-button" @click.prevent="onClick">
    <svg-icon name="giftcard" class="donate-button__icon" />
  </a>
  <!-- end .donate-button-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-donate-button',
})
export default class DonateButton extends Vue {
  get link(): string {
    return 'https://www.donationalerts.com/r/everhoof';
  }

  onClick(): void {
    window.open(this.link, 'Отправить пожертвование', 'width=450px,height=600px,resizable=1');
  }
}
</script>

<style lang="stylus" src="./donate-button.styl" />
