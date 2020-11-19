<template>
  <div class="page__wrapper">
    <div class="page__header" />
    <div class="page__main">
      <nuxt />
      <aside class="page__aside scrollbar" :class="{ page__aside_state_open: asideOpened }">
        <b-aside-panel />
      </aside>
      <div class="page__aside-button" @click="asideOpened = !asideOpened">
        <svg-icon name="apps" class="page__aside-icon" />
      </div>
    </div>
    <div class="page__footer">
      <b-footer />
    </div>
    <b-modal :value="login" title="Login" @input="setLogin">
      <b-login-modal />
    </b-modal>
    <b-modal :value="register" title="Register" @input="setRegister">
      <b-register-modal />
    </b-modal>
  </div>
</template>

<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import { Component, Vue } from 'nuxt-property-decorator';
import BFooter from '~/components/footer/footer.vue';
import BAsidePanel from '~/components/aside-panel/aside-panel.vue';
import BModal from '~/components/modal/modal.vue';
import BLoginModal from '~/components/login-modal/login-modal.vue';
import BRegisterModal from '~/components/register-modal/register-modal.vue';

@Component({
  components: { BRegisterModal, BModal, BLoginModal, BAsidePanel, BFooter },
})
export default class Default extends Vue {
  asideOpened: boolean = false;

  get login(): boolean {
    return this.$accessor.auth.loginModal;
  }

  setLogin(value: boolean): void {
    this.$accessor.auth.SET_LOGIN_MODAL(value);
  }

  get register(): boolean {
    return this.$accessor.auth.registerModal;
  }

  setRegister(value: boolean): void {
    this.$accessor.auth.SET_REGISTER_MODAL(value);
  }
}
</script>
