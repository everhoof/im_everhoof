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
import { GetChatDataQuery } from '~/graphql/schema';

type User = GetChatDataQuery['getOnline'][0];

@Component({
  name: 'b-aside-panel',
  components: { BUsersList },
})
export default class AsidePanel extends Vue {
  private broadcasters: User[] = [];
  private moderators: User[] = [];
  private users: User[] = [];

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

  get online(): User[] {
    const users = this.$accessor.chat.online as User[];
    return Array.from(users).sort((a, b) => a.username?.localeCompare(b.username || '') || 0);
  }

  hasRole(user: User, role: string): boolean {
    return !!user.roles.find((r) => r.name === role);
  }
}
</script>

<style lang="stylus" src="./aside-panel.styl" />
