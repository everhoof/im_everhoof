<template>
  <div class="page__chat">
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

@Component({
  components: { BFooter, BChat },
})
export default class MainPage extends Vue {}
</script>

<style lang="stylus" src="./main.styl"></style>
