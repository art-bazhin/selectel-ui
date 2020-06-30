import { html } from 'lit-html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { wrapStory } from '../../common/ts/utils';
import { action } from '@storybook/addon-actions';

export const button = () => {
  const buttonText = text('text', 'Click Me');
  const type = select('type', ['submit', 'reset', 'button'], 'submit');
  const href = text('href', '');
  const target = select('target', ['_self', '_blank', '_parent', '_top'], '_self');
  const size = select('size', ['xs', 's', 'm', 'l'], 'm');
  const kind = select('kind', ['primary', 'secondary'], 'primary');
  const inverted = boolean('inverted', false);
  const disabled = boolean('disabled', false);

  return wrapStory(html`
    <sui-button
      type=${type}
      href=${href}
      target=${target}
      text=${buttonText}
      size=${size}
      kind=${kind}
      ?disabled=${disabled}
      ?inverted=${inverted}
      @click=${action('click')}
    ></sui-button>
  `);
};

export default {
  title: 'Button',
  decorators: [withKnobs],
};
