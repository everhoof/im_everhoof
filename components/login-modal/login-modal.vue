<template>
  <!-- begin .login-modal -->
  <div class="login-modal">
    <b-form :errors="errors">
      <div class="form__row">
        <b-text-field
          id="login_username"
          v-model="username"
          placeholder="Username"
          width-full
          @keydown.enter="passwordInput.focus()"
        />
      </div>
      <div class="form__row">
        <b-text-field
          id="login_password"
          ref="passwordInput"
          v-model="password"
          placeholder="Password"
          width-full
          type="password"
          @keydown.enter="signIn()"
        />
      </div>
      <div class="form__row form__row_align_center">
        <a href="#" class="login-modal__link">Forgot password</a>
      </div>
      <div class="form__row login-modal__buttons">
        <b-button class="login-modal__button" large @click="signIn()">Login In</b-button>
        <b-button class="login-modal__button" large @click="signUp()">Register</b-button>
      </div>
    </b-form>
  </div>
  <!-- end .login-modal -->
</template>

<script lang="ts">
import { Action, Component, Mutation, Ref, Vue } from 'nuxt-property-decorator';
import { ActionMethod, MutationMethod } from 'vuex';
import BForm from '~/components/form/form.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BCheckbox from '~/components/checkbox/checkbox.vue';
import BButton from '~/components/button/button.vue';

@Component({
  name: 'b-login-modal',
  components: { BButton, BCheckbox, BTextField, BForm },
})
export default class Login extends Vue {
  @Ref() passwordInput!: BTextField;

  @Mutation setMyId!: MutationMethod;
  @Mutation login!: MutationMethod;
  @Action getUser!: ActionMethod;

  errors: string[] = [];

  username: string = '';
  password: string = '';

  signUp() {
    this.$accessor.auth.SET_REGISTER_MODAL(true);
    this.$accessor.auth.SET_LOGIN_MODAL(false);
  }

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();

    const usernameValid = this.validateUsername();
    const passwordValid = this.validatePassword();

    return usernameValid && passwordValid;
  }

  validateUsername() {
    const isFilled = this.username.length !== 0;
    if (!isFilled) {
      this.errors.push(this.$t('username_fill_error').toString());
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

    return true;
  }

  async signIn() {
    if (!this.validateForm()) return;
    const { errors } = await this.$accessor.auth.signIn({
      email: this.username,
      password: this.password,
    });

    if (errors) this.errors.push(errors[0].message);
  }
}
</script>

<style lang="stylus" src="./login-modal.styl" />
