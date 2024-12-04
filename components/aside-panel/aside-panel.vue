<template>
  <!-- begin .aside-panel-->
  <div class="aside-panel">
    <section v-if="broadcasters.length > 0" class="aside-panel__section">
      <h2 class="aside-panel__section-title">Ведущие – {{ broadcasters.length }}</h2>
      <div class="aside-panel__section-body">
        <b-users-list :users="broadcasters" />
      </div>
    </section>
    <section v-if="moderators.length > 0" class="aside-panel__section">
      <h2 class="aside-panel__section-title">Модераторы – {{ moderators.length }}</h2>
      <div class="aside-panel__section-body">
        <b-users-list :users="moderators" />
      </div>
    </section>
    <section class="aside-panel__section">
      <h2 class="aside-panel__section-title">Пользователи – {{ users.length }}</h2>
      <div class="aside-panel__section-body">
        <b-users-list :users="users" />
      </div>
    </section>
  </div>
  <!-- end .aside-panel-->
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import BUsersList from '~/components/users-list/users-list.vue';
import type { OnlinePartsFragment } from '~/graphql/schema';

@Component({
  name: 'b-aside-panel',
  components: { BUsersList },
})
export default class AsidePanel extends Vue {
  private broadcasters: OnlinePartsFragment[] = [];
  private moderators: OnlinePartsFragment[] = [];
  private users: OnlinePartsFragment[] = [];

  @Watch('online')
  onOnlineChanged(): void {
    this.broadcasters = [];
    this.moderators = [];
    this.users = [];

    this.online.forEach((user) => {
      if (this.hasRole(user, 'BROADCASTER')) {
        this.broadcasters.push(user);
      } else if (this.hasRole(user, 'ADMIN') || this.hasRole(user, 'MODERATOR')) {
        this.moderators.push(user);
      } else {
        this.users.push(user);
      }
    });
  }

  created(): void {
    this.onOnlineChanged();
  }

  get online(): OnlinePartsFragment[] {
    const users = this.$accessor.chat.online;

    return Array.from(users).sort((a, b) => {
      const nameA = a.username?.toLowerCase() || '';
      const nameB = b.username?.toLowerCase() || '';

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  hasRole(user: OnlinePartsFragment, role: string): boolean {
    return !!user.roles.find((r) => r.name === role);
  }
}
</script>

<style lang="stylus" src="./aside-panel.styl" />
