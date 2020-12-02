<template>
  <!-- begin .emoji-panel-->
  <div class="emoji-panel">
    <div
      v-for="(item, i) in emoji"
      :key="i"
      class="emoji-panel__item"
      @click="selectEmoji($event, item.name)"
    >
      <div class="emoji-panel__icon" :style="{ backgroundImage: `url(/emoji/${item.name}.${item.ext})` }" />
    </div>
  </div>
  <!-- end .emoji-panel-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Emoji } from '~/types/emoji';

@Component({
  name: 'b-emoji-panel',
})
export default class EmojiPanel extends Vue {
  get emoji(): Emoji[] {
    if (Array.isArray(this.$accessor.chat.emoji)) {
      return Array.from(this.$accessor.chat.emoji).sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1,
      );
    }
    return this.$accessor.chat.emoji || [];
  }

  selectEmoji(event: MouseEvent, name: string) {
    if (this.$accessor.chat.message && this.$accessor.chat.message.slice(-1) !== ' ') {
      this.$accessor.chat.SET_MESSAGE(this.$accessor.chat.message + ' ');
    }
    this.$accessor.chat.SET_MESSAGE(this.$accessor.chat.message + `:${name}: `);
    if (!event.shiftKey) this.$accessor.SET_EMOJIS_PANEL_ACTIVE(false);
  }
}
</script>

<style lang="stylus" src="./emoji-panel.styl" />
