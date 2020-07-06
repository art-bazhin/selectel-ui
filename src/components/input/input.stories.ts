import { html } from 'lit-html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { wrapStory } from '../../common/ts/utils';
import { action } from '@storybook/addon-actions';

export const input = () => {
  const value = text('value', '');
  const label = text('label', 'Label');
  const placeholder = text('placeholder', 'Placeholder text');
  const comment = text('comment', 'Comment text');
  const error = boolean('error', false);
  const errorText = text('errorText', 'Error text');
  const disabled = boolean('disabled', false);
  const size = select('size', ['xs', 's', 'm', 'l'], 'm');
  const inverted = boolean('inverted', false);

  return wrapStory(
    html`
      <sui-input
        .value=${value}
        size=${size}
        label=${label}
        placeholder=${placeholder}
        comment=${comment}
        ?error=${error}
        errorText=${errorText}
        ?disabled=${disabled}
        @valueChange=${action('valueChange')}
        ?inverted=${inverted}
      ></sui-input>
    `
  );
};

export default {
  title: 'Input',
  decorators: [withKnobs],
};
