<template>
  <!-- begin .user-cm-->
  <b-context-menu ref="context-menu">
    <b-context-menu-item @click="openProfile">Профиль</b-context-menu-item>
    <b-context-menu-item v-if="showMention" @click="mention">Упомянуть</b-context-menu-item>
  </b-context-menu>
  <!-- end .user-cm-->
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'nuxt-property-decorator';
import BContextMenu from '~/components/context-menu/context-menu.vue';
import BContextMenuItem from '~/components/context-menu-item/context-menu-item.vue';

@Component({
  name: 'b-user-cm',
  components: { BContextMenuItem, BContextMenu },
})
export default class UserCm extends Vue {
  @Ref('context-menu')
  public readonly contextMenu?: BContextMenu;

  get showMention(): boolean {
    return this.$accessor.auth.loggedIn;
  }

  openProfile(): void {
    const ownerId = this.contextMenu?.contextData?.user.id as string | undefined;
    if (!ownerId) return;

    this.$router.push({ name: 'modal_profile', params: { id: ownerId.toString() } });

    this.$nuxt.$emit('close-context-menus');
  }

  mention(): void {
    const user = this.contextMenu?.contextData?.user;
    if (!user) return;

    this.$accessor.messages.mention({ id: user.id, username: user.username });

    this.$nuxt.$emit('close-context-menus');
  }
}
</script>

<style lang="stylus" src="./user-cm.styl" />
