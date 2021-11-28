<template>
  <!-- begin .message-update-input-->
  <div class="message-update-input">
    <div class="message-update-input__content">
      <input
        class="message-update-input__input"
        :value="value"
        @keyup.enter="onEnter"
        @input="$emit('input', $event.target.value)"
      />
      <div class="message-update-input__actions">
        esc для
        <button class="message-update-input__action" @click="$emit('cancel')">Отмены</button>
        • enter, чтобы
        <button class="message-update-input__action" @click="onEnter">Сохранить</button>
      </div>
    </div>
  </div>
  <!-- end .message-update-input-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-message-update-input',
})
export default class MessageUpdateInput extends Vue {
  @Prop({
    required: true,
    type: String,
  })
  readonly value!: string;

  mounted() {
    document.addEventListener('keyup', this.onKeyUp);
  }

  beforeDestroy() {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.$emit('cancel');
    }
  }

  onEnter() {
    this.$emit('save');
  }
}
</script>

<style lang="stylus" src="./message-update-input.styl" />
