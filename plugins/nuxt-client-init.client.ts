export default async (context: any) => {
  await context.store.dispatch('nuxtClientInit', context);

  document.addEventListener('click', onDocumentClick);

  async function onDocumentClick(event: Event): Promise<void> {
    const target = event.target as HTMLElement;
    const mention = target.closest<HTMLElement>('mention');

    if (mention && mention.dataset.id) {
      await window.$nuxt.$router.push({
        name: 'modal_profile',
        params: {
          id: mention.dataset.id,
        },
      });
    }
  }
};
