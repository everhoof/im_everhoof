<template>
  <!-- begin .reminder-->
  <div v-show="show" class="reminder">
    <div class="reminder__content">
      <div class="reminder__text">
        <slot />
      </div>
      <button v-if="$slots.button" class="reminder__button" @click="$emit('click')">
        <slot name="button" />
      </button>
    </div>
    <button class="reminder__close-button" @click="close()">
      <svg-icon name="close" class="reminder__icon" />
    </button>
  </div>
  <!-- end .reminder-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { ReminderTypes } from '~/types/reminderTypes';

@Component({
  name: 'b-reminder',
})
export default class Reminder extends Vue {
  @Prop({ required: true, type: String }) id!: ReminderTypes;

  get show(): boolean {
    const userId = this.$accessor.auth.user?.id;
    if (!userId) return false;
    const reminder = this.$accessor.modals.reminders.find(
      (reminder) => reminder.type === this.id && reminder.userId === userId,
    );
    return !!(reminder && reminder.disabledAt === null);
  }

  close() {
    this.$accessor.modals.removeReminder({ type: this.id, timeout: 1000 * 60 * 60 * 24 * 31 });
  }
}
</script>

<style lang="stylus" src="./reminder.styl" />
