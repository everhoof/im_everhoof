<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Подтверждение E-mail</template>
    <template #default>
      <div class="email-confirmed-modal">
        <div class="email-confirmed-modal__illustration">
          <img class="email-confirmed-modal__image" src="@/assets/icons/sent.svg" alt="" />
        </div>
        <div class="email-confirmed-modal__text">
          Ваш e-mail адрес подтверждён. Теперь вам доступен весь функционал чата.
        </div>
        <b-button class="email-confirmed-modal__button" width-full large @click="$emit('close', $event)">
          Закрыть
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
export default class EmailConfirmedModal extends Vue {}
</script>

<style lang="stylus" src="./email-confirmed-modal.styl" />
