<template>
  <!-- begin .users-list-->
  <ul class="users-list">
    <router-link
      v-for="(user, i) of users"
      :key="user.id"
      :to="{ name: 'modal_profile', params: { id: user.id } }"
      tag="li"
      class="users-list__item"
      @contextmenu.native="openContextMenu($event, i)"
    >
      <img v-if="user.avatar" :src="user.avatar.s.link" class="users-list__avatar" alt="" />
      <div
        v-else
        class="users-list__avatar users-list__avatar_type_default"
        :style="{ backgroundColor: avatarColor(user.id) }"
      >
        {{ user.username[0] }}
      </div>
      <div class="users-list__info">
        <h3 class="users-list__username">{{ user.username }}</h3>
      </div>
    </router-link>
  </ul>
  <!-- end .users-list-->
</template>

<script lang="ts">
import { Component, InjectReactive, Prop, Vue } from 'nuxt-property-decorator';
import type { OnlinePartsFragment } from '~/graphql/schema';
import { getUserColor } from '~/tools/util';
import BContextMenu from '~/components/context-menu/context-menu.vue';

@Component({
  name: 'b-users-list',
})
export default class UsersList extends Vue {
  @Prop({ required: true }) users!: OnlinePartsFragment[];

  @InjectReactive('user-context-menu')
  readonly contextMenu!: BContextMenu;

  get avatarColor() {
    return (id: number): string => getUserColor(id);
  }

  openContextMenu(event: MouseEvent, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.contextMenu.open(event, { user: this.users[index] });
  }
}
</script>

<style lang="stylus" src="./users-list.styl" />
