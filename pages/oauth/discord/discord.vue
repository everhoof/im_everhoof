<template>
  <div class="page__error">
    <div v-if="error" class="page-error">
      <div class="page-error__illustration">
        <img class="page-error__image" src="@/assets/icons/warning.svg" alt="" />
      </div>
      <div class="page-error__text">
        {{ error }}
      </div>
      <router-link v-slot="{ href, navigate }" :to="{ name: 'main' }" custom>
        <b-button tag="a" :href="href" large width-full @click="navigate">Вернуться в чат</b-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import BButton from '~/components/button/button.vue';
import OAuthDiscord from '~/graphql/mutations/oauth-discord.graphql';
import { OAuthDiscordMutation, OAuthDiscordMutationVariables } from '~/graphql/schema';

@Component({
  layout: 'confirmation',
  components: { BButton },
})
export default class OAuthDiscordPage extends Vue {
  error: string = '';

  async created() {
    if (!process.client) return;
    const code = this.$route.query.code;

    if (typeof code === 'string') {
      const client = this.$apolloProvider.defaultClient;
      if (!client) return;
      try {
        const { data, errors } = await client.mutate<OAuthDiscordMutation, OAuthDiscordMutationVariables>({
          mutation: OAuthDiscord,
          variables: { code },
        });
        if (errors) {
          this.error = errors.length > 0 ? errors[0].message : 'Произошла неизвестная ошибка';
        } else if (!data?.OAuthDiscord) {
          this.error = 'Произошла неизвестная ошибка';
        } else {
          this.$accessor.auth.SET_USER_ID(data.OAuthDiscord.ownerId);
          await this.$apolloHelpers.onLogin(data.OAuthDiscord.value);
          window.location.href = '/';
        }
      } catch (e) {
        this.error = 'Произошла неизвестная ошибка';
      }
    } else {
      await this.$router.replace({ name: 'main' });
    }
  }
}
</script>

<style lang="stylus" src="./discord.styl" />
