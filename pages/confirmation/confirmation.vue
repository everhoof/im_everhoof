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
import { Context } from '@nuxt/types';
import ConfirmEmail from '~/graphql/mutations/confirm-email.graphql';
import { ConfirmEmailMutation, ConfirmEmailMutationVariables } from '~/graphql/schema';
import BButton from '~/components/button/button.vue';

@Component({
  layout: 'confirmation',
  components: { BButton },
  async asyncData(ctx: Context) {
    const token = ctx.route.query.code;
    let error = '';

    if (typeof token === 'string') {
      const client = ctx.app.apolloProvider?.defaultClient;
      if (!client) return;
      if (ctx.route.name === 'confirm_email') {
        try {
          const { data, errors } = await client.mutate<ConfirmEmailMutation, ConfirmEmailMutationVariables>({
            mutation: ConfirmEmail,
            variables: { token },
          });
          if (errors) {
            error = errors.length > 0 ? errors[0].message : 'Произошла неизвестная ошибка';
          } else if (!data?.confirmEmail) {
            error = 'Произошла неизвестная ошибка';
          } else {
            await ctx.redirect({ name: 'modal_email_confirmed', replace: true });
          }
        } catch (e) {
          error = 'Произошла неизвестная ошибка';
        }
      } else {
        await ctx.redirect({ name: 'main', replace: true });
      }
      return { error };
    } else {
      await ctx.redirect({ name: 'main', replace: true });
    }
  },
})
export default class ConfirmationPage extends Vue {
  private error: string = '';
}
</script>

<style lang="stylus" src="./confirmation.styl"></style>
