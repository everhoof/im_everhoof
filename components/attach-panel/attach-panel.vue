<template>
  <!-- begin .attach-panel-->
  <div class="attach-panel">
    <div v-for="(item, i) of items" :key="i" class="attach-panel__item" @click="attachTypeClicked(item.id)">
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
    { icon: 'image', text: 'Picture', id: 0 },
    { icon: 'description', text: 'Document', id: 1 },
  ];

  attachTypeClicked(itemId: number) {
    if (itemId === this.items[0].id) {
    } else if (itemId === this.items[0].id) {
    }
  }
}
</script>

<style lang="stylus" src="./attach-panel.styl" />
