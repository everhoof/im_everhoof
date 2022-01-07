import { onError } from 'apollo-link-error';
import { Context } from '@nuxt/types';

export default function (context: Context) {
  const errorLink = onError(({ response, graphQLErrors }) => {
    if (response) {
      response.errors = [
        (graphQLErrors && graphQLErrors[0] && graphQLErrors[0].extensions?.exception?.response) || {
          message: 'Неизвестная ошибка',
          error: 'UNKNOWN',
        },
      ];
    }

    if (graphQLErrors) {
      graphQLErrors.forEach((error: any) => {
        const response = graphQLErrors?.[0]?.extensions?.exception?.response;
        if (!response) return;
        const statusCode = response.statusCode || response.status;
        if (!statusCode) return;
        if (statusCode === 401) {
          const isLoginPath = Array.isArray(error.path) && error.path.find((p: string) => p === 'signIn');
          if (isLoginPath) return;
          context.app.$accessor.auth.logout();
        }

        if (Array.isArray(response.message)) {
          response.message.forEach((msg: string) => context.$bus.$emit('snotify-error', msg));
        } else {
          context.$bus.$emit('snotify-error', response.message);
        }
      });
    }
  });
  return {
    link: errorLink,
    httpEndpoint: context.$config.graphqlHttpEndpoint,
    wsEndpoint: context.$config.graphqlWsEndpoint,
    httpLinkOptions: {
      fetch: (uri: any, options: any) => {
        // const lang: string = new Cookies().get('i18n_redirected');
        const uriWithLang = `${uri}?lang=ru`;
        return fetch(uriWithLang, options);
      },
    },
    inMemoryCacheOptions: {
      addTypename: false,
    },
    apollo: {
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
        mutate: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all',
        },
      },
    },
  };
}
