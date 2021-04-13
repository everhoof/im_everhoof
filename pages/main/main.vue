<template>
  <div class="page__chat">
    <div class="page__reminder">
      <b-reminder :id="reminderId" @click="confirmEmail()">
        <template #default>Подтвердите адрес эл. почты, чтобы использовать все возможности чата</template>
        <template #button>Подтвердить</template>
      </b-reminder>
    </div>
    <b-chat />
    <div class="page__footer">
      <b-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BChat from '~/components/chat/chat.vue';
import BFooter from '~/components/footer/footer.vue';
import BReminder from '~/components/reminder/reminder.vue';
import { ReminderTypes } from '~/types/reminderTypes';

@Component({
  components: { BReminder, BFooter, BChat },
})
export default class MainPage extends Vue {
  get reminderId(): string {
    return ReminderTypes.EMAIL_CONFIRMATION;
  }

  confirmEmail() {}
}
</script>

<style lang="stylus" src="./main.styl"></style>
