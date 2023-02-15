import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

import LinkTree from './LinkTree';

export default component$(() => {
  return (
    <LinkTree />
  );
});

export const head: DocumentHead = {
  title: 'Lukas',
  meta: [
    {
      name: 'Links',
      content: 'Social links for Lukas Lunkwitz',
    },
  ],
};
