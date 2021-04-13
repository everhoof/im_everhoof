<template>
  <!-- begin .password-reset-requested-modal-->
  <div class="password-reset-requested-modal">
    <div class="password-reset-requested-modal__illustration">
      <img class="password-reset-requested-modal__image" src="@/assets/icons/sent.svg" alt="" />
    </div>
    <div class="password-reset-requested-modal__text">
      Письмо для восстановления пароля было отправлено на адрес, указанный при регистрации.
    </div>
  </div>
  <!-- end .password-reset-requested-modal-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-password-reset-requested-modal',
})
export default class PasswordResetRequestedModal extends Vue {}
</script>

<style lang="stylus" src="./password-reset-requested-modal.styl" />
