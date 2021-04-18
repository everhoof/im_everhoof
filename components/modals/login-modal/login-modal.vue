<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Вход</template>
    <template #default>
      <div class="login-modal">
        <b-form :errors="errors" name="login-form">
          <div class="form__row">
            <b-text-field
              id="login_username"
              v-model="username"
              name="username"
              placeholder="Логин"
              width-full
              @keydown.enter="passwordInput.focus()"
            />
          </div>
          <div class="form__row">
            <b-text-field
              id="login_password"
              ref="passwordInput"
              v-model="password"
              name="password"
              placeholder="Пароль"
              width-full
              type="password"
            />
          </div>
          <div class="form__row">
            <b-button large width-full @click.prevent="signIn()">Войти</b-button>
          </div>
          <div class="form__row form__row_align_center">
            <router-link :to="{ name: 'modal_request_password_reset' }">Восстановить пароль</router-link>
          </div>
          <div class="form__row form__row_align_center">
            <router-link :to="{ name: 'modal_register' }">Нет аккаунта</router-link>
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
  name: 'b-login-modal',
  components: { BModal, BButton, BCheckbox, BTextField, BForm },
})
export default class Login extends Vue {
  @Ref() passwordInput!: BTextField;

  @Mutation setMyId!: MutationMethod;
  @Mutation login!: MutationMethod;
  @Action getUser!: ActionMethod;

  errors: string[] = [];

  username: string = '';
  password: string = '';

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
    else await this.$emit('close');
  }
}
</script>

<style lang="stylus" src="./login-modal.styl" />
