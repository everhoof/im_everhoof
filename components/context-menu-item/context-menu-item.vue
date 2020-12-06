<template>
  <!-- begin .context-menu-item-->
  <li class="context-menu__item">
    <button
      class="context-menu__button"
      :class="{ 'context-menu__link_color_danger': important }"
      @click="$emit('click', $event)"
    >
      <svg-icon v-if="icon" class="context-menu__icon" :name="icon" />
      <slot />
    </button>
  </li>
  <!-- end .context-menu-item-->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  name: 'b-context-menu-item',
})
export default class ContextMenuItem extends Vue {
  @Prop({ required: false, type: Boolean, default: false }) important!: boolean;
  @Prop({ required: false, type: String }) icon!: string;
}
</script>

<style lang="stylus" src="./context-menu-item.styl" />
