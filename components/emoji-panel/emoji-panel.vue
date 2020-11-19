<template>
  <!-- begin .emoji-panel-->
  <div class="emoji-panel__group">
    <div v-for="i of 50" :key="i" class="emoji-panel__item">
      <div
        class="emoji-panel__icon"
        :style="{
          backgroundPosition: `-${(i - 1) * 32}px -${Math.floor((i - 1) / 11) * 32}px`,
        }"
      />
    </div>
  </div>
  <!-- end .emoji-panel-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-emoji-panel',
})
export default class EmojiPanel extends Vue {}
</script>

<style lang="stylus" src="./emoji-panel.styl" />
