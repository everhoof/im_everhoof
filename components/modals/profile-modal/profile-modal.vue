<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Профиль</template>
    <template #default>
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
            <div class="profile-modal__registered">
              {{ $t('modals.profile.registered') }}: {{ registered }}
            </div>
            <div class="profile-modal__registered">{{ $t('modals.profile.was_online') }}: {{ online }}</div>
          </div>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { DateTime } from 'luxon';
import BAvatar from '~/components/avatar/avatar.vue';
import { GetUserByIdQuery } from '~/graphql/schema';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-profile-modal',
  components: { BModal, BAvatar },
})
export default class ProfileModal extends Vue {
  async created(): Promise<void> {
    if (!this.id || this.id === -1) return;
    await this.$accessor.chat.fetchUserById({ id: this.id });
  }

  get id(): number {
    return parseInt(this.$route.params.id);
  }

  get user(): GetUserByIdQuery['getUserById'] | undefined {
    return this.$accessor.chat.user(this.id);
  }

  get username(): string {
    return this.user?.username || 'Loading...';
  }

  get registered(): string {
    return this.user?.createdAt
      ? DateTime.fromISO(this.user?.createdAt)
          .setZone(this.$accessor.settings.timeZone)
          .toLocaleString(DateTime.DATE_FULL)
      : 'loading...';
  }

  get online(): string {
    return this.user?.createdAt
      ? DateTime.fromISO(this.user?.wasOnlineAt)
          .setZone(this.$accessor.settings.timeZone)
          .toLocaleString(DateTime.DATE_FULL)
      : 'loading...';
  }
}
</script>

<style lang="stylus" src="./profile-modal.styl" />
