<template>
  <div class="page__wrapper">
    <div class="page__header" />
    <div class="page__main">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import '~/assets/stylus/normalize.styl';
import '~/assets/stylus/grid.styl';
import '~/assets/stylus/global.styl';
import '~/assets/stylus/colors.styl';
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  head() {
    return {
      htmlAttrs: {
        class: ['page_theme_' + this.$accessor.settings.theme],
      },
    };
  },
})
export default class Confirmation extends Vue {}
</script>
