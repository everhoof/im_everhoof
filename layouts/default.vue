<template>
  <div v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight" class="page__wrapper">
    <div class="page__header" />
    <div class="page__main" :class="{ page__main_state_open: asidePcOpened }">
      <nuxt />
      <aside
        class="page__aside scrollbar"
        :class="{
          'page__aside_state_mobile-open': asideMobileOpened,
          'page__aside_state_pc-open': asidePcOpened,
        }"
      >
        <b-aside-panel />
      </aside>
      <div
        class="page__aside-button page__aside-button_type_mobile"
        @click="asideMobileOpened = !asideMobileOpened"
      >
        <svg-icon name="menu" class="page__aside-icon" />
      </div>
      <div class="page__aside-footer">
        <button class="page__aside-menu" @click="setAsidePcOpened(!asidePcOpened)">
          <svg-icon name="menu_open" />
        </button>
      </div>
    </div>
    <div class="page__footer"></div>
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
  asideMobileOpened: boolean = false;

  get asidePcOpened(): boolean {
    return this.$accessor.chat.asidePcOpened;
  }

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

  swipeLeft() {
    this.asideMobileOpened = true;
  }

  swipeRight() {
    this.asideMobileOpened = false;
  }

  setAsidePcOpened(value: boolean) {
    this.$accessor.chat.SET_ASIDE_PC_OPENED(value);
    this.$cookies.set('aside_pc_opened', value.toString(), {
      path: '/',
      sameSite: 'lax',
      maxAge: 86400 * 365 * 10,
    });
  }
}
</script>
