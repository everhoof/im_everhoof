import { onError } from 'apollo-link-error';
import { Context } from '@nuxt/types';

export default function (ctx: Context) {
  const errorLink = onError(({ response, graphQLErrors }) => {
    if (response) {
      response.errors = [
        (graphQLErrors && graphQLErrors[0] && graphQLErrors[0].extensions?.exception.response) || {
          message: 'Неизвестная ошибка',
          error: 'UNKNOWN',
        },
      ];
    }

    if (graphQLErrors) {
      graphQLErrors.forEach((error: any) => {
        const response = graphQLErrors && graphQLErrors[0] && graphQLErrors[0].extensions?.exception.response;
        if (!response) return;
        const statusCode = response.statusCode;
        if (!statusCode || statusCode !== 401) return;
        const isLoginPath = Array.isArray(error.path) && error.path.find((p: string) => p === 'login');
        if (isLoginPath) return;
        ctx.app.$accessor.auth.logout();
      });
    }
  });
  return {
    link: errorLink,
    httpEndpoint: process.env.GRAPHQL_HTTP || 'http://localhost:4000/graphql',
    wsEndpoint: process.env.GRAPHQL_WS || 'ws://localhost:4000/graphql',
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
