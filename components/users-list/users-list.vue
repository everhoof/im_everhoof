<template>
  <!-- begin .users-list-->
  <ul class="users-list">
    <li v-for="user in users" :key="user.id" class="users-list__item">
      <img v-if="user.avatar" :src="user.avatar.s.link" class="users-list__avatar" />
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
    </li>
  </ul>
  <!-- end .users-list-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { GetChatDataQuery } from '~/graphql/schema';
import { getUserColor } from '~/tools/util';

@Component({
  name: 'b-users-list',
})
export default class UsersList extends Vue {
  @Prop({ required: true }) users!: GetChatDataQuery['getOnline'];

  get avatarColor() {
    return (id: number): string => getUserColor(id);
  }
}
</script>

<style lang="stylus" src="./users-list.styl" />
