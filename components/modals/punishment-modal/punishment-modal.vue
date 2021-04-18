<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>{{ $t('modals.punishment.mute') }} {{ username }}</template>
    <template #default>
      <div class="punishment-modal">
        <!--    <div class="punishment-modal__row">-->
        <!--      <span class="punishment-modal__row-description">Тип наказания:</span>-->
        <!--      <div class="punishment-modal__row-content">-->
        <!--        <b-select-->
        <!--          class="punishment-modal__punishment-select"-->
        <!--          :items="types"-->
        <!--          :value="selectedTypeIndex"-->
        <!--          @input="setSelectedTypeIndex"-->
        <!--        />-->
        <!--      </div>-->
        <!--    </div>-->
        <div class="punishment-modal__row">
          <span class="punishment-modal__row-description">{{ $t('modals.punishment.mute_reason') }}:</span>
          <div class="punishment-modal__row-content">
            <b-text-field
              id="punishment-custom-time"
              v-model="reason"
              class="punishment-modal__input"
              width-full
              small
            />
          </div>
        </div>
        <div class="punishment-modal__row">
          <span class="punishment-modal__row-description">{{ $t('modals.punishment.mute_time') }}:</span>
          <div class="punishment-modal__row-content">
            <b-select
              class="punishment-modal__select"
              :items="time"
              :value="selectedTimeIndex"
              @input="setSelectedTimeIndex"
            />
            <div v-if="isCustomTime" class="punishment-modal__custom-time">
              <b-text-field
                id="punishment-custom-time"
                v-model="customTime"
                class="punishment-modal__input"
                width-full
                small
              />
              <span>{{ $t('modals.punishment.times.minutes') }}</span>
            </div>
          </div>
        </div>
        <div v-show="false" class="punishment-modal__row">
          <b-checkbox id="punishment-delete-messages" v-model="deleteMessages">
            {{ $t('modals.punishment.delete_all_users_messages') }}
          </b-checkbox>
        </div>
        <div class="punishment-modal__row">
          <b-button width-full @click="punish()">{{ $t('modals.punishment.mute') }}!</b-button>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BSelect from '~/components/select/select.vue';
import BTextField from '~/components/text-field/text-field.vue';
import BCheckbox from '~/components/checkbox/checkbox.vue';
import BButton from '~/components/button/button.vue';
import { PunishmentTypes } from '~/graphql/schema';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-punishment-modal',
  components: { BModal, BButton, BCheckbox, BTextField, BSelect },
})
export default class PunishmentModal extends Vue {
  types: string[] = ['Бан', 'Мут'];
  time: string[] = [
    this.$t('modals.punishment.times.forever').toString(),
    this.$t('modals.punishment.times.day').toString(),
    this.$t('modals.punishment.times.hour').toString(),
    this.$t('modals.punishment.times.ten_minutes').toString(),
    this.$t('modals.punishment.times.custom').toString(),
  ];
  timeValues: (number | undefined)[] = [undefined, 1440, 60, 10, undefined];
  selectedTypeIndex: number = 0;
  selectedTimeIndex: number = 0;
  customTime: string = '30';
  deleteMessages: boolean = false;
  reason: string = this.$t('modals.punishment.mute_reason_placeholder').toString();

  async created() {
    if (!this.username) {
      await this.$accessor.chat.fetchUserById({ id: this.id });
    }
    if (!this.username) {
      this.$emit('close');
    }
  }

  get id(): number {
    return parseInt(this.$route.params.id);
  }

  get username(): string {
    return this.$accessor.chat.user(this.id)?.username || '';
  }

  get isCustomTime(): boolean {
    return this.selectedTimeIndex === this.time.length - 1;
  }

  get duration(): number | undefined {
    return this.isCustomTime ? +this.customTime : this.timeValues[this.selectedTimeIndex];
  }

  setSelectedTypeIndex(value: number) {
    this.selectedTypeIndex = value;
  }

  setSelectedTimeIndex(value: number) {
    this.selectedTimeIndex = value;
  }

  async punish() {
    await this.$accessor.chat.punishUser({
      userId: this.id,
      type: PunishmentTypes.Mute,
      duration: this.duration,
      reason: this.reason,
    });
    await this.$emit('close');
  }
}
</script>

<style lang="stylus" src="./punishment-modal.styl" />
