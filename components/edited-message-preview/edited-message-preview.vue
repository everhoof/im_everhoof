<template>
  <!-- begin .edited-message-preview-->
  <div class="edited-message-preview">
    <div class="edited-message-preview__icon">
      <svg-icon name="edit" />
    </div>
    <div class="edited-message-preview__about">
      <div class="edited-message-preview__title">Изменить сообщение</div>
      <div class="edited-message-preview__text" v-html="content" />
    </div>
    <button type="button" class="edited-message-preview__cancel" @click="onCancel">
      <svg-icon name="close" />
    </button>
  </div>
  <!-- end .edited-message-preview-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Message } from '~/types/message';

@Component({
  name: 'b-edited-message-preview',
})
export default class EditedMessagePreview extends Vue {
  get message(): Message | null {
    return this.$accessor.messages.editableMessage;
  }

  get content(): string {
    return this.message?.content ?? '';
  }

  onCancel(): void {
    this.$accessor.messages.stopMessageEdit();
  }
}
</script>

<style lang="stylus" src="./edited-message-preview.styl" />
