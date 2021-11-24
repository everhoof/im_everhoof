<template>
  <div class="progress-bar">
    <div class="progress-bar__progress-state" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-progress-bar',
})
export default class ProgressBar extends Vue {
  @Prop({
    required: false,
    type: [Number, String],
    default: 0,
  })
  readonly progress!: number | string;
}
</script>

<style lang="stylus" src="./progress-bar.styl" />
