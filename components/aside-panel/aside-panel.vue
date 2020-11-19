<template>
  <!-- begin .aside-panel-->
  <div class="aside-panel">
    <section class="aside-panel__section">
      <h2 class="aside-panel__section-title">Пользователи в сети – {{ users.length }}</h2>
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
  get users(): GetChatDataQuery['getOnline'] {
    return this.$accessor.chat.online;
  }
}
</script>

<style lang="stylus" src="./aside-panel.styl" />
