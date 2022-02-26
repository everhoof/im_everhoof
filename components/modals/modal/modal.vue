<template>
  <!-- begin .modal-->
  <div class="modal" :class="modifiers" @click.self="onOverlayClick">
    <b-tile class="tile_padding_medium tile_borders_all modal__tile">
      <div class="modal__header">
        <h3 class="modal__title">
          <slot name="title" />
        </h3>
        <button v-if="!noCloseButton" class="modal__close" @click="$emit('close', $event)">
          <svg-icon name="close" />
        </button>
      </div>
      <slot />
    </b-tile>
  </div>
  <!-- end .modal-->
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import BTile from '~/components/tile/tile.vue';

@Component({
  name: 'b-modal',
  components: { BTile },
})
export default class Modal extends Vue {
  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  noImplicitClose!: boolean;

  @Prop({
    required: false,
    type: Boolean,
    default: false,
  })
  noCloseButton!: boolean;

  get modifiers(): string[] {
    const modifiers: string[] = [];
    if (this.noImplicitClose) modifiers.push('modal_no_implicit-close');
    return modifiers;
  }

  @Watch('$route')
  onRouteChanged(newRoute: Route, oldRoute: Route) {
    if (newRoute.name !== oldRoute.name) {
      this.$emit('close', { route: true });
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if (!this.noImplicitClose) {
      this.$emit('close', event);
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
