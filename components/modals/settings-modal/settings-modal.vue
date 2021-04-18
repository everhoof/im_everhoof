<template>
  <b-modal @close="$emit('close', $event)">
    <template #title>Регистрация</template>
    <template #default>
      <div class="settings-modal">
        <b-switch id="settings_theme" :checked="dark" @update:checked="setTheme">Тёмная тема</b-switch>
        <b-switch id="settings_compact" :checked="compact" @update:checked="setCompact">
          Компактный вид
        </b-switch>
      </div>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BSwitch from '~/components/switch/switch.vue';
import BModal from '~/components/modals/modal/modal.vue';

@Component({
  name: 'b-settings-modal',
  components: { BModal, BSwitch },
})
export default class SettingsModal extends Vue {
  get dark(): boolean {
    return this.$accessor.settings.theme === 'dark';
  }

  get compact(): boolean {
    return this.$accessor.settings.compact;
  }

  setTheme(value: boolean) {
    this.$accessor.settings.setTheme(value ? 'dark' : 'light');
  }

  setCompact(value: boolean) {
    this.$accessor.settings.setCompact(value);
  }
}
</script>

<style lang="stylus" src="./settings-modal.styl" />
