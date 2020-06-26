/* global window */

import {
  configure,
  addParameters,
  // setCustomElements,
} from '@storybook/web-components';

// import customElements from '../custom-elements.json';

// setCustomElements(customElements);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
  backgrounds: [
    { name: 'bg', value: 'var(--sui-theme-bg)', default: true },
    { name: 'bg-alt', value: 'var(--sui-theme-bg-alt)' },
    { name: 'base', value: 'var(--sui-theme-fg)' },
  ],
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../src', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
