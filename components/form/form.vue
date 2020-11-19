<template>
  <!-- begin .form-->
  <div class="form">
    <h3 v-if="title" class="form__title">{{ title }}</h3>
    <div class="form__content">
      <div v-if="errors.length > 0" class="form__row">
        <b-form-error :errors="errors" width-full />
      </div>
      <slot />
    </div>
  </div>
  <!-- end .form-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import BFormError from '~/components/form-error/form-error.vue';

@Component({
  name: 'b-form',
  components: { BFormError },
})
export default class Form extends Vue {
  @Prop({ type: Array, default: () => [] }) errors!: string[];
  @Prop({ type: String }) title!: string;
}
</script>

<style lang="stylus" src="./form.styl" />
