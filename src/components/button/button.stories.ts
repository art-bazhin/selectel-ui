import { html } from 'lit-html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { wrapStory } from '../../common/ts/utils';

export const button = () => {
  const buttonText = text('text', 'Click Me');
  const size = select('size', ['xs', 's', 'm', 'l'], 'm');
  const type = select('type', ['primary', 'secondary'], 'primary');
  const inverted = boolean('inverted', false);
  const disabled = boolean('disabled', false);

  return wrapStory(html`
    <sui-button
      text=${buttonText}
      size=${size}
      type=${type}
      ?disabled=${disabled}
      ?inverted=${inverted}
    ></sui-button>
  `);
};

export default {
  title: 'Button',
  decorators: [withKnobs],
};
