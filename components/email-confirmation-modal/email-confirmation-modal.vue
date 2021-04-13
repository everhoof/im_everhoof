<template>
  <!-- begin .email-confirmation-modal-->
  <div class="email-confirmation-modal">
    <div class="email-confirmation-modal__illustration">
      <img class="email-confirmation-modal__image" src="@/assets/icons/sent.svg" alt="" />
    </div>
    <div class="email-confirmation-modal__text">
      Письмо было отправлено на адрес, указанный при регистрации.
    </div>
    <b-button
      v-if="domain"
      :href="`https://${domain}`"
      tag="a"
      class="email-confirmation-modal__button"
      width-full
      large
    >
      Перейти в почтовый ящик
    </b-button>
  </div>
  <!-- end .email-confirmation-modal-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';

@Component({
  name: 'b-email-confirmation-modal',
  components: { BButton },
})
export default class EmailConfirmationModal extends Vue {
  get domain(): string {
    if (this.$accessor.auth.user?.email) {
      const split = this.$accessor.auth.user?.email.split('@');
      return (split && split[1]) || '';
    }
    return '';
  }
}
</script>

<style lang="stylus" src="./email-confirmation-modal.styl" />
