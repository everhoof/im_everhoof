<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Регистрация</template>
    <template #default>
      <div class="register-modal">
        <b-form :errors="errors" name="register-form">
          <div class="form__row">
            <b-text-field
              id="register_email"
              v-model="email"
              name="email"
              placeholder="E-mail"
              width-full
              @keydown.enter="usernameInput.focus()"
            />
          </div>
          <div class="form__row">
            <b-text-field
              id="register_username"
              ref="usernameInput"
              v-model="username"
              name="username"
              placeholder="Логин"
              width-full
              @keydown.enter="passwordInput.focus()"
            />
          </div>
          <div class="form__row">
            <b-text-field
              id="register_password"
              ref="passwordInput"
              v-model="password"
              name="password"
              placeholder="Пароль"
              width-full
              type="password"
            />
          </div>
          <div class="form__row">
            <b-button large width-full @click.prevent="signUp()">Зарегистрироваться</b-button>
          </div>
          <div class="form__row form__row_align_center">
            <router-link :to="{ name: 'modal_login' }">Уже есть аккаунт? Войти.</router-link>
          </div>
        </b-form>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Action, Component, Mutation, Ref, Vue } from 'nuxt-property-decorator';
import { ActionMethod, MutationMethod } from 'vuex';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BCheckbox from '~/components/checkbox/checkbox.vue';
import BButton from '~/components/button/button.vue';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-register-modal',
  components: { BModal, BButton, BCheckbox, BTextField, BForm },
})
export default class RegisterModal extends Vue {
  @Ref() usernameInput!: BTextField;
  @Ref() passwordInput!: BTextField;

  @Mutation setMyId!: MutationMethod;
  @Mutation login!: MutationMethod;
  @Action getUser!: ActionMethod;

  errors: string[] = [];

  email: string = '';
  username: string = '';
  password: string = '';

  patterns = {
    username: /^[a-zA-Z0-9\-_]+$/,
    email: /.{3,}@.+\..{2,}/i,
  };

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();

    const emailValid = this.validateEmail();
    const usernameValid = this.validateUsername();
    const passwordValid = this.validatePassword();

    return usernameValid && emailValid && passwordValid;
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

  validateUsername() {
    const isFilled = this.username.length !== 0;
    if (!isFilled) {
      this.errors.push(this.$t('username_fill_error').toString());
      return false;
    }

    const matchesLength = this.username.length <= 32 && this.username.length >= 3;
    if (!matchesLength) {
      this.errors.push(this.$t('username_length_error').toString());
      return false;
    }

    const matchesRegex = this.patterns.username.test(this.username);
    if (!matchesRegex) {
      this.errors.push(this.$t('username_regex_error').toString());
      return false;
    }

    return true;
  }

  validatePassword() {
    const isFilled = this.password.length !== 0;
    if (!isFilled) {
      this.errors.push(this.$t('password_fill_error').toString());
      return false;
    }

    const matchesLength = this.password.length <= 255 && this.password.length >= 5;
    if (!matchesLength) {
      this.errors.push(this.$t('passport_length_error').toString());
      return false;
    }

    return true;
  }

  async signUp() {
    if (!this.validateForm()) return;
    const { errors } = await this.$accessor.auth.signUp({
      email: this.email,
      password: this.password,
      username: this.username,
    });

    if (errors) this.errors.push(errors[0].message);
    else await this.$emit('close');
  }
}
</script>

<style lang="stylus" src="./register-modal.styl" />
