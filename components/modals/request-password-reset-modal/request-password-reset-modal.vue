<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Восстановление пароля</template>
    <template #default>
      <div v-if="!requested" class="request-password-reset-modal">
        <b-form :errors="errors" name="request-password-reset-form">
          <div class="form__row">
            <b-text-field
              id="password_reset_email"
              v-model="email"
              name="email"
              placeholder="E-mail"
              width-full
              @keydown.enter="reset()"
            />
          </div>
          <div class="form__row">
            <b-button large width-full @click.prevent="reset()">Восстановить</b-button>
          </div>
        </b-form>
      </div>
      <div v-else class="request-password-reset-modal">
        <div class="request-password-reset-modal__illustration">
          <img class="request-password-reset-modal__image" src="@/assets/icons/sent.svg" alt="" />
        </div>
        <div class="request-password-reset-modal__text">
          Письмо для восстановления пароля будет отправлено, если пользователь с таким E-mail зарегистрирован
        </div>
        <b-button v-if="domain" :href="`https://${domain}`" target="_blank" tag="a" width-full large>
          Перейти в почтовый ящик
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-request-password-reset-modal',
  components: { BModal, BTextField, BForm, BButton },
})
export default class RequestPasswordResetModal extends Vue {
  errors: string[] = [];

  email: string = '';

  patterns = {
    email: /.{3,}@.+\..{2,}/i,
  };

  requested: boolean = false;

  get domain(): string {
    if (this.email) {
      const split = this.email.split('@');
      return (split && split[1]) || '';
    }
    return '';
  }

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
    this.requested = await this.$accessor.auth.requestPasswordReset({
      email: this.email,
    });
  }
}
</script>

<style lang="stylus" src="./request-password-reset-modal.styl" />
