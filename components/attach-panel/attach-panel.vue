<template>
  <!-- begin .attach-panel-->
  <div class="attach-panel">
    <div v-for="(item, i) of items" :key="i" class="attach-panel__item">
      <svg-icon :name="item.icon" class="attach-panel__icon" />
      <div class="attach-panel__text">{{ item.text }}</div>
    </div>
  </div>
  <!-- end .attach-panel-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-attach-panel',
})
export default class AttachPanel extends Vue {
  items = [
    { icon: 'image', text: 'Picture' },
    { icon: 'description', text: 'Document' },
  ];
}
</script>

<style lang="stylus" src="./attach-panel.styl" />
