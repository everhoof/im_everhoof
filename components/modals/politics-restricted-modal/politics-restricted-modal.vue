<template>
  <b-modal no-implicit-close no-close-button @close="onClose">
    <template #title>{{ $t('modals.politics.title') }}</template>
    <template #default>
      <div class="email-confirmed-modal">
        <div class="email-confirmed-modal__text" v-html="$t('modals.politics.text')" />
        <b-button class="email-confirmed-modal__button" width-full large @click="onClose">
          {{ $t('modals.politics.close') }}
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-email-confirmed-modal',
  components: { BModal, BButton },
})
export default class PoliticsRestrictedModal extends Vue {
  onClose(event: MouseEvent): void {
    this.$emit('close', event);
  }
}
</script>

<style lang="stylus" src="./politics-restricted-modal.styl" />
