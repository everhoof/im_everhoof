<template>
  <!-- begin .profile-modal-->
  <div class="profile-modal">
    <div class="profile-modal__user">
      <b-avatar class="profile-modal__avatar" :user="user" large />
      <div class="profile-modal__user-info">
        <div class="profile-modal__username">
          <span>{{ username }}</span>
          <button v-if="false" class="profile-modal__username-edit">
            <svg-icon name="edit" />
          </button>
        </div>
        <div class="profile-modal__registered">{{ $t('modals.profile.registered') }}: {{ registered }}</div>
        <div class="profile-modal__registered">{{ $t('modals.profile.was_online') }}: {{ online }}</div>
      </div>
    </div>
  </div>
  <!-- end .profile-modal-->
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import BAvatar from '~/components/avatar/avatar.vue';
import { GetUserByIdQuery } from '~/graphql/schema';

@Component({
  name: 'b-profile-modal',
  components: { BAvatar },
})
export default class ProfileModal extends Vue {
  @Watch('id')
  async onIdChanged(): Promise<void> {
    if (!this.id || this.id === -1) return;
    await this.$accessor.chat.fetchUserById({ id: this.id });
  }

  async created(): Promise<void> {
    if (!this.id || this.id === -1) return;
    await this.$accessor.chat.fetchUserById({ id: this.id });
  }

  get id(): number {
    return this.$accessor.modals.profileModalTargetId;
  }

  get user(): GetUserByIdQuery['getUserById'] | undefined {
    return this.$accessor.chat.user(this.id);
  }

  get username(): string {
    return this.user?.username || 'Loading...';
  }

  get registered(): string {
    return this.user?.createdAt
      ? DateTime.fromISO(this.user?.createdAt).toLocaleString(DateTime.DATE_FULL)
      : 'loading...';
  }

  get online(): string {
    return this.user?.createdAt
      ? DateTime.fromISO(this.user?.wasOnlineAt).toLocaleString(DateTime.DATE_FULL)
      : 'loading...';
  }
}
</script>

<style lang="stylus" src="./profile-modal.styl" />
