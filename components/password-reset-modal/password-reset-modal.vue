<template>
  <!-- begin .password-reset-modal-->
  <div class="password-reset-modal">
    <b-form :errors="errors" name="login-form">
      <div class="form__row">
        <b-text-field
          id="password_reset_email"
          v-model="email"
          name="email"
          placeholder="E-mail или Username"
          width-full
          @keydown.enter="reset()"
        />
      </div>
      <div class="form__row">
        <b-button large width-full @click.prevent="reset()">Восстановить</b-button>
      </div>
    </b-form>
  </div>
  <!-- end .password-reset-modal-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';

@Component({
  name: 'b-password-reset-modal',
  components: { BTextField, BForm, BButton },
})
export default class PasswordResetModal extends Vue {
  errors: string[] = [];

  email: string = '';

  patterns = {
    email: /.{3,}@.+\..{2,}/i,
  };

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    return this.validateEmail();
  }

  validateEmail() {
    const isFilled = this.email.length !== 0;
    if (!isFilled) {
      this.errors.push(this.$t('email_fill_error').toString());
      return false;
    }

    const matchesLength = this.email.length <= 191;
    if (!matchesLength) {
      this.errors.push(this.$t('email_length_error').toString());
      return false;
    }

    const matchesRegex = this.patterns.email.test(this.email);
    if (!matchesRegex) {
      this.errors.push(this.$t('email_regex_error').toString());
      return false;
    }

    return true;
  }

  async reset() {
    if (!this.validateForm()) return;
    const result = await this.$accessor.auth.requestPasswordReset({
      email: this.email,
    });
    if (result) {
      this.$accessor.modals.SET_PASSWORD_RESET_MODAL_OPENED(false);
      this.$accessor.modals.SET_PASSWORD_RESET_REQUESTED_MODAL_OPENED(true);
    }
  }
}
</script>

<style lang="stylus" src="./password-reset-modal.styl" />
