<template>
  <!-- begin .checkbox-->
  <div
    class="checkbox"
    :class="{
      'checkbox_display_inline-block': inline,
      checkbox_with_margin: margin,
    }"
  >
    <input
      :id="id"
      :checked="value"
      class="checkbox__input"
      type="checkbox"
      :disabled="disabled"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="id" class="checkbox__label">
      <slot />
    </label>
  </div>
  <!-- end .checkbox-->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  name: 'b-checkbox',
})
export default class Checkbox extends Vue {
  @Prop({ type: String, required: true }) id!: string;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ required: false, type: Boolean, default: false }) value!: boolean;
  @Prop({ type: Boolean, default: false }) inline!: boolean;
  @Prop({ type: Boolean }) margin!: boolean;
}
</script>

<style lang="stylus" src="./checkbox.styl" />
