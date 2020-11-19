<template>
  <!-- begin .aside-panel-->
  <div class="aside-panel" :class="{ 'aside-panel_type_open': openMenu }">
    <div class="aside-panel__open-button" @click="openMenu = !openMenu">
      <svg-icon name="apps" class="aside-panel__open-icon" />
    </div>
    <section class="aside-panel__section">
      <h2 class="aside-panel__section-title">Пользователей в сети – {{ users.length }}</h2>
      <div class="aside-panel__section-body"><b-users-list :users="users" /></div>
    </section>
  </div>
  <!-- end .aside-panel-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BUsersList from '~/components/users-list/users-list.vue';
import { GetChatDataQuery } from '~/graphql/schema';

@Component({
  name: 'b-aside-panel',
  components: { BUsersList },
})
export default class AsidePanel extends Vue {
  openMenu: boolean = false;

  get users(): GetChatDataQuery['getOnline'] {
    return this.$accessor.chat.online;
  }
}
</script>

<style lang="stylus" src="./aside-panel.styl" />
