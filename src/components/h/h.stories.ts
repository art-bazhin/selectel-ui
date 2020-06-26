import { html } from 'lit-html';

export const Heading = () => {
  return html`
    <div class="u-p-yellow">
      <div class="sui-h1 u-mb-yellow">H1 Heading</div>
      <div class="sui-h2 u-mb-yellow">H2 Heading</div>
      <div class="sui-h3 u-mb-yellow">H3 Heading</div>
      <div class="sui-h4 u-mb-yellow">H4 Heading</div>
    </div>
  `;
};

export default {
  title: 'Heading',
};
