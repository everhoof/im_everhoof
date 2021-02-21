<template>
  <div
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
    class="page__wrapper"
    @contextmenu="openContextMenu"
  >
    <div class="page__header" />
    <div
      class="page__main"
      :class="{
        'page__main_state_pc-open': asidePcOpened,
        'page__main_state_mobile-open': asideMobileOpened,
      }"
    >
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
        <b-aside-footer v-if="$accessor.auth.loggedIn" />
      </div>
    </div>
    <b-modal :value="login" title="Вход" @input="setLogin">
      <b-login-modal />
    </b-modal>
    <b-modal :value="register" title="Регистрация" @input="setRegister">
      <b-register-modal />
    </b-modal>
    <b-context-menu ref="message-context-menu">
      <b-context-menu-item v-if="showDeleteMessage" icon="delete" @click="deleteMessage">
        Удалить сообщение
      </b-context-menu-item>
    </b-context-menu>
    <b-context-menu ref="context-menu" />
    <b-modal :value="profileModalOpened" title="Профиль" @input="setProfileModalOpened">
      <b-profile-modal />
    </b-modal>
  </div>
</template>

<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import { Component, Vue, ProvideReactive } from 'nuxt-property-decorator';
import BFooter from '~/components/footer/footer.vue';
import BAsidePanel from '~/components/aside-panel/aside-panel.vue';
import BModal from '~/components/modal/modal.vue';
import BLoginModal from '~/components/login-modal/login-modal.vue';
import BRegisterModal from '~/components/register-modal/register-modal.vue';
import BButton from '~/components/button/button.vue';
import BAsideFooter from '~/components/aside-footer/aside-footer.vue';
import BContextMenu from '~/components/context-menu/context-menu.vue';
import BContextMenuItem from '~/components/context-menu-item/context-menu-item.vue';
import BProfileModal from '~/components/profile-modal/profile-modal.vue';

@Component({
  components: {
    BProfileModal,
    BContextMenuItem,
    BContextMenu,
    BAsideFooter,
    BButton,
    BRegisterModal,
    BModal,
    BLoginModal,
    BAsidePanel,
    BFooter,
  },
})
export default class Default extends Vue {
  @ProvideReactive('context-menu') contextMenu: BContextMenu | null = null;
  @ProvideReactive('message-context-menu') messageContextMenu: BContextMenu | null = null;
  asideMobileOpened: boolean = false;

  mounted() {
    this.contextMenu = this.$refs['context-menu'] as BContextMenu;
    this.messageContextMenu = this.$refs['message-context-menu'] as BContextMenu;
  }

  get asidePcOpened(): boolean {
    return this.$accessor.chat.asidePcOpened;
  }

  get login(): boolean {
    return this.$accessor.auth.loginModal;
  }

  get profileModalOpened(): boolean {
    return this.$accessor.modals.profileModalOpened;
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

  setProfileModalOpened(value: boolean): void {
    this.$accessor.modals.SET_PROFILE_MODAL_OPENED(value);
  }

  closeContextMenus() {
    this.contextMenu?.close();
    this.messageContextMenu?.close();
  }

  openContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.messageContextMenu?.close();
    this.contextMenu?.open(event);
  }

  get showDeleteMessage(): boolean {
    const ownerId = this.messageContextMenu?.contextData?.message.owner.id;
    return (
      this.$accessor.auth.can.deleteAny('message').granted ||
      (this.$accessor.auth.can.deleteOwn('message').granted &&
        ownerId &&
        ownerId === this.$accessor.auth.user?.id)
    );
  }

  async deleteMessage() {
    const messageId: number = this.messageContextMenu?.contextData?.message.id;
    this.closeContextMenus();
    if (!messageId) return;
    await this.$accessor.chat.deleteMessage({ messageId });
  }
}
</script>
