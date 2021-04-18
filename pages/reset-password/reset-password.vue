<template>
  <div v-if="error" class="page__error">
    <div v-if="error" class="page-error">
      <div class="page-error__illustration">
        <img class="page-error__image" src="@/assets/icons/warning.svg" alt="" />
      </div>
      <div class="page-error__text">
        {{ error }}
      </div>
      <router-link v-slot="{ href, navigate }" :to="{ name: 'main' }" custom>
        <b-button tag="a" :href="href" large width-full @click="navigate">Вернуться в чат</b-button>
      </router-link>
    </div>
  </div>
  <div v-else class="page__error">
    <b-form :errors="errors" name="login-form">
      <div class="form__row">
        <b-text-field
          id="reset_password"
          v-model="password"
          name="username"
          placeholder="Новый пароль"
          width-full
          type="password"
          @keydown.enter="passwordInput.focus()"
        />
      </div>
      <div class="form__row">
        <b-text-field
          id="reset_password_confirm"
          ref="passwordInput"
          v-model="passwordConfirm"
          name="password"
          placeholder="Подтверждение пароля"
          width-full
          type="password"
          @keydown.enter="reset()"
        />
      </div>
      <div class="form__row">
        <b-button large width-full @click.prevent="reset()">Восстановить пароль</b-button>
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import { Context } from '@nuxt/types';
import BButton from '~/components/button/button.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BForm from '~/components/form/form.vue';

@Component({
  layout: 'confirmation',
  components: { BForm, BTextField, BButton },
  asyncData(ctx: Context) {
    const token = ctx.route.query.code;
    let error = '';

    if (typeof token !== 'string') {
      error = 'Произошла неизвестная ошибка';
    }
    return { error };
  },
})
export default class ResetPasswordPage extends Vue {
  @Ref() passwordInput!: BTextField;

  error: string = '';
  errors: string[] = [];

  password: string = '';
  passwordConfirm: string = '';

  clearErrors() {
    this.errors = [];
  }

  validateForm() {
    this.clearErrors();
    return this.validatePassword();
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

    if (this.password !== this.passwordConfirm) {
      this.errors.push(this.$t('passwords_do_not_match').toString());
      return false;
    }

    return true;
  }

  async reset() {
    if (!this.validateForm()) return;
    const { errors } = await this.$accessor.auth.resetPassword({
      token: this.$route.query.code as string,
      password: this.password,
    });

    if (errors) this.errors.push(errors[0].message);
    else await this.$router.replace({ name: 'main' });
  }
}
</script>

<style lang="stylus" src="./reset-password.styl"></style>
