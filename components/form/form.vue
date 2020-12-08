<template>
  <!-- begin .form-->
  <form class="form" :name="name">
    <h3 v-if="title" class="form__title">{{ title }}</h3>
    <div class="form__content">
      <div v-if="errors.length > 0" class="form__row">
        <b-form-error :errors="errors" width-full />
      </div>
      <slot />
    </div>
  </form>
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
  @Prop({ type: String, required: true }) name!: string;
}
</script>

<style lang="stylus" src="./form.styl" />
