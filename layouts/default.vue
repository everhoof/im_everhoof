<template>
  <div
    v-touch:swipe.left="swipeLeft"
    v-touch:swipe.right="swipeRight"
    class="page__wrapper"
    @contextmenu="openContextMenu"
  >
    <client-only>
      <vue-snotify />
    </client-only>
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
    <b-context-menu ref="message-context-menu">
      <b-context-menu-item @click="openProfileModal">Профиль</b-context-menu-item>
      <b-context-menu-item v-if="showEditMessage" icon="edit" @click="updateMessage">
        Изменить сообщение
      </b-context-menu-item>
      <b-context-menu-item v-if="showDeleteMessage" icon="delete" @click="deleteMessage">
        Удалить сообщение
      </b-context-menu-item>
      <b-context-menu-item v-if="showPunish" icon="hammer" important @click="punish">
        {{ $t('modals.punishment.mute') }}
      </b-context-menu-item>
    </b-context-menu>
    <b-context-menu ref="context-menu" />
  </div>
</template>

<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import 'vue-snotify/styles/material.css';
import { Component, Vue, ProvideReactive, Watch } from 'nuxt-property-decorator';
import { VueConstructor } from 'vue';
import { Route } from 'vue-router';
import BAsidePanel from '~/components/aside-panel/aside-panel.vue';
import BModal from '~/components/modals/modal/modal.vue';
import BButton from '~/components/button/button.vue';
import BAsideFooter from '~/components/aside-footer/aside-footer.vue';
import BContextMenu from '~/components/context-menu/context-menu.vue';
import BContextMenuItem from '~/components/context-menu-item/context-menu-item.vue';
import { ReminderTypes } from '~/types/reminderTypes';
import { ChatMessage } from '~/types/messages';

@Component({
  head() {
    return {
      htmlAttrs: {
        class: ['page_theme_' + this.$accessor.settings.theme],
      },
    };
  },
  components: {
    BContextMenuItem,
    BContextMenu,
    BAsideFooter,
    BButton,
    BModal,
    BAsidePanel,
  },
})
export default class Default extends Vue {
  @ProvideReactive('context-menu') contextMenu: BContextMenu | null = null;
  @ProvideReactive('message-context-menu') messageContextMenu: BContextMenu | null = null;
  asideMobileOpened: boolean = false;

  created() {
    this.onRouteChanged();
  }

  handleSnotifyError(message: string) {
    this.$snotify.error(message);
  }

  mounted() {
    this.onUserChanged();
    this.contextMenu = this.$refs['context-menu'] as BContextMenu;
    this.messageContextMenu = this.$refs['message-context-menu'] as BContextMenu;
    this.$bus.$on('snotify-error', this.handleSnotifyError);
  }

  beforeDestroy() {
    this.$bus.$off('snotify-error');
  }

  @Watch('$accessor.auth.user')
  onUserChanged() {
    if (!process.client) return;
    const user = this.$accessor.auth.user;
    if (!user) return;
    if (user?.emailConfirmed === false) {
      const reminder = this.$accessor.modals.reminders.find(
        (reminder) => reminder.type === ReminderTypes.EMAIL_CONFIRMATION,
      );
      if (
        (reminder &&
          reminder.disabledAt !== null &&
          reminder.userId === user.id &&
          Date.now() > reminder.disabledAt + reminder.timeout) ||
        !reminder
      ) {
        this.$accessor.modals.addReminder(ReminderTypes.EMAIL_CONFIRMATION);
      }
    }
  }

  @Watch('$route')
  onRouteChanged(newRoute?: Route, oldRoute?: Route) {
    if (!newRoute || !oldRoute || newRoute.name !== oldRoute.name) {
      if (!this.$route?.name || !/^modal_.*/.test(this.$route?.name)) return;
      const components = this.$router.getMatchedComponents();
      const component = components.find((c) => (c as any).options.name.includes('modal'));
      if (component) this.openModal(component);
    }
  }

  openModal(component: unknown) {
    if (process.client) {
      this.$modal.show(
        component as VueConstructor,
        {},
        {
          width: '100%',
          height: 'auto',
        },
        {
          'before-close': (event: any) => {
            if (event?.params?.route) return;
            this.$router.push({ name: 'main' });
          },
        },
      );
    }
  }

  get asidePcOpened(): boolean {
    return this.$accessor.chat.asidePcOpened;
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

  closeContextMenus() {
    this.contextMenu?.close();
    this.messageContextMenu?.close();
  }

  openContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.closeContextMenus();
  }

  get showDeleteMessage(): boolean {
    const ownerId = this.messageContextMenu?.contextData?.message.owner?.id;

    if (!ownerId || this.messageContextMenu?.contextData?.message.deletedAt) return false;

    if (this.$accessor.auth.can.deleteAny('message').granted) {
      return true;
    }

    return ownerId === this.$accessor.auth.user?.id && this.$accessor.auth.can.deleteOwn('message').granted;
  }

  get showEditMessage(): boolean {
    const ownerId = this.messageContextMenu?.contextData?.message.owner?.id;

    if (!ownerId || ownerId !== this.$accessor.auth.user?.id) return false;

    return this.$accessor.auth.can.updateOwn('message').granted;
  }

  get showPunish(): boolean {
    const ownerId = this.messageContextMenu?.contextData?.message.owner?.id;
    return (
      (this.$accessor.auth.can.update('ban').granted || this.$accessor.auth.can.update('mute').granted) &&
      ownerId !== this.$accessor.auth.user?.id
    );
  }

  updateMessage() {
    const message: ChatMessage = this.messageContextMenu?.contextData?.message;

    if (!message) return;

    this.$bus.$emit('message-updating', message);
  }

  async deleteMessage() {
    const messageId: number = this.messageContextMenu?.contextData?.message.id;
    this.closeContextMenus();
    if (!messageId) return;
    await this.$accessor.chat.deleteMessage({ messageId });
  }

  punish(): void {
    const ownerId = this.messageContextMenu?.contextData?.message.owner?.id;
    this.$router.push({ name: 'modal_punishment', params: { id: ownerId } });
  }

  openProfileModal(): void {
    const ownerId = this.messageContextMenu?.contextData?.message.owner?.id;
    this.$router.push({ name: 'modal_profile', params: { id: ownerId } });
  }
}
</script>
