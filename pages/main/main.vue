<template>
  <div class="page__chat">
    <b-chat />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BChat from '~/components/chat/chat.vue';

@Component({
  components: { BChat },
})
export default class MainPage extends Vue {}
</script>

<style lang="stylus" src="./main.styl"></style>
