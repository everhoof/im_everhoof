<template>
  <!-- begin .context-menu-item-->
  <li class="context-menu__item" :class="{ 'context-menu__item_color_danger': important }">
    <button class="context-menu__button" @click="click">
      <svg-icon v-if="icon" class="context-menu__icon" :name="icon" />
      <slot />
    </button>
  </li>
  <!-- end .context-menu-item-->
</template>

<script lang="ts">
import { Component, Vue, Prop, InjectReactive } from 'nuxt-property-decorator';
import ContextMenu from '~/components/context-menu/context-menu.vue';

@Component({
  name: 'b-context-menu-item',
})
export default class ContextMenuItem extends Vue {
  @InjectReactive('context-menu') readonly contextMenu!: ContextMenu | null;
  @InjectReactive('user-context-menu') readonly userContextMenu!: ContextMenu | null;
  @InjectReactive('message-context-menu') readonly messageContextMenu!: ContextMenu | null;
  @Prop({ required: false, type: Boolean, default: false }) important!: boolean;
  @Prop({ required: false, type: String }) icon!: string;

  click(event: MouseEvent) {
    this.$emit('click', event);
    this.contextMenu?.close();
    this.userContextMenu?.close();
    this.messageContextMenu?.close();
  }
}
</script>

<style lang="stylus" src="./context-menu-item.styl" />
