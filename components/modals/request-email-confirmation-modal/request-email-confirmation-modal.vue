<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Подтверждение E-mail</template>
    <template #default>
      <div class="request-email-confirmation-modal">
        <div class="request-email-confirmation-modal__illustration">
          <img class="request-email-confirmation-modal__image" src="@/assets/icons/sent.svg" alt="" />
        </div>
        <div class="request-email-confirmation-modal__text">
          Письмо было отправлено на адрес, указанный при регистрации.
        </div>
        <b-button v-if="domain" :href="`https://${domain}`" tag="a" target="_blank" width-full large>
          Перейти в почтовый ящик
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
  name: 'b-request-email-confirmation-modal',
  components: { BModal, BButton },
})
export default class RequestEmailConfirmationModal extends Vue {
  get domain(): string {
    if (this.$accessor.auth.user?.email) {
      const split = this.$accessor.auth.user?.email.split('@');
      return (split && split[1]) || '';
    }
    return '';
  }
}
</script>

<style lang="stylus" src="./request-email-confirmation-modal.styl" />
