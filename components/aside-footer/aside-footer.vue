<template>
  <!-- begin .aside-footer-->
  <div class="aside-footer">
    <div class="aside-footer__profile" @click.stop="dropdown = !dropdown">
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
      <transition>
        <ul v-show="dropdown" ref="dropdown" class="aside-footer__dropdown">
          <li class="aside-footer__dropdown-item">
            <b-button width-full>Профиль</b-button>
          </li>
          <li class="aside-footer__dropdown-item">
            <b-button width-full @click.stop="logout">Выйти</b-button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
  <!-- end .aside-footer-->
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import { getUserColor } from '~/tools/util';
import { AuthState } from '~/store/auth';
import BButton from '~/components/button/button.vue';

@Component({
  name: 'b-aside-footer',
  components: { BButton },
})
export default class AsideFooter extends Vue {
  @Ref('dropdown') dropdownEl!: HTMLUListElement;
  dropdown: boolean = false;

  mounted() {
    document.addEventListener('click', (event: MouseEvent) => {
      if (!this.dropdownEl.contains(event.target as Node)) {
        this.dropdown = false;
      }
    });
  }

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

  logout() {
    this.$apolloHelpers.onLogout();
    this.$accessor.auth.SET_LOGGED_IN(false);
  }
}
</script>

<style lang="stylus" scoped>
.v-enter-active,
.v-leave-active
  transition all .2s

.v-enter,
.v-leave-to
  margin 8px 0
  opacity 0
</style>
<style lang="stylus" src="./aside-footer.styl" />
