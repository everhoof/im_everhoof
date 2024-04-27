<template>
  <span class="bubble-separator" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-bubble-separator',
})
export default class BubbleSeparator extends Vue {}
</script>

<style lang="stylus" scoped>
.bubble-separator
  width: 1px;
  margin: 2px;
  background: var(--gray-200);
</style>
