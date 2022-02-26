<template>
  <!-- begin .warning-->
  <div class="warning">
    <div class="warning__text">
      {{ $t('warning') }}
    </div>
    <button class="warning__button" @click="onClose">
      <svg-icon name="close" class="warning__button-icon" />
    </button>
  </div>
  <!-- end .warning-->
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  name: 'b-warning',
})
export default class Warning extends Vue {
  onClose(): void {
    this.$accessor.settings.setWarning(false);
  }
}
</script>

<style lang="stylus" src="./warning.styl" />
