<template>
  <!-- begin .aside-footer-->
  <div class="aside-footer">
    <div class="aside-footer__profile">
      <img v-if="avatar" :src="avatar" class="aside-footer__avatar" />
      <div
        v-else
        class="aside-footer__avatar aside-footer__avatar_type_default"
        :style="{ backgroundColor: avatarColor }"
      >
        {{ username[0] }}
      </div>
      <div class="aside-footer__info">
        <h3 class="aside-footer__username">{{ username }}</h3>
      </div>
    </div>
  </div>
  <!-- end .aside-footer-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getUserColor } from '~/tools/util';
import { AuthState } from '~/store/auth';

@Component({
  name: 'b-aside-footer',
})
export default class AsideFooter extends Vue {
  get user(): AuthState['user'] {
    return this.$accessor.auth.user;
  }

  get username(): string {
    return this.$accessor.auth.user?.username || ' ';
  }

  get avatar(): string | undefined {
    return this.$accessor.auth.user?.avatar?.s.link;
  }

  get avatarColor() {
    return getUserColor(this.user?.id || 0);
  }
}
</script>

<style lang="stylus" src="./aside-footer.styl" />
