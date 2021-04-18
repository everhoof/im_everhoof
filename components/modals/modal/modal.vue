<template>
  <!-- begin .modal-->
  <div class="modal" @click.self="$emit('close', $event)">
    <b-tile class="tile_padding_medium tile_borders_all modal__tile">
      <div class="modal__header">
        <h3 class="modal__title">
          <slot name="title" />
        </h3>
        <button class="modal__close" @click="$emit('close', $event)">
          <svg-icon name="close" />
        </button>
      </div>
      <slot />
    </b-tile>
  </div>
  <!-- end .modal-->
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import BTile from '~/components/tile/tile.vue';

@Component({
  name: 'b-modal',
  components: { BTile },
})
export default class Modal extends Vue {
  @Watch('$route')
  onRouteChanged(newRoute: Route, oldRoute: Route) {
    if (newRoute.name !== oldRoute.name) {
      this.$emit('close', { route: true });
    }
  }
}
</script>

<style lang="stylus" src="./modal.styl" />
<style lang="css">
.vm--container .vm--modal {
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  overflow: unset;
}

.vm--container .vm-transition--overlay-enter-active,
.vm--container .vm-transition--overlay-leave-active {
  transition: all 250ms;
}
</style>
