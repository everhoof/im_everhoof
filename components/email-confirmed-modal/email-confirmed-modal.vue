<template>
  <!-- begin .email-confirmed-modal-->
  <div class="email-confirmed-modal">
    <div class="email-confirmed-modal__illustration">
      <img class="email-confirmed-modal__image" src="@/assets/icons/sent.svg" alt="" />
    </div>
    <div class="email-confirmed-modal__text">
      Ваш e-mail адрес подтверждён. Теперь вам доступен весь функционал чата.
    </div>
    <b-button
      class="email-confirmed-modal__button"
      width-full
      large
      @click="setEmailConfirmedModalOpened(false)"
    >
      Закрыть
    </b-button>
  </div>
  <!-- end .email-confirmed-modal-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';

@Component({
  name: 'b-email-confirmed-modal',
  components: { BButton },
})
export default class EmailConfirmedModal extends Vue {
  setEmailConfirmedModalOpened(value: boolean): void {
    this.$accessor.modals.SET_EMAIL_CONFIRMED_MODAL_OPENED(value);
  }
}
</script>

<style lang="stylus" src="./email-confirmed-modal.styl" />
