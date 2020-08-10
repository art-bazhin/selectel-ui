import { html, TemplateResult, property } from 'lit-element';
import { SuiElement } from '../../common/ts/sui-element';
import { createBemFn } from '../../common/ts/utils';

const ELEMENT_NAME = 'sui-field';
const bem = createBemFn(ELEMENT_NAME);

export abstract class SuiField extends SuiElement {
  @property()
  label = '';

  @property()
  comment = '';

  @property()
  errorText = '';

  @property({ type: Boolean })
  error = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  inverted = false;

  @property()
  layout: 'vertical' | 'horizontal' = 'vertical';

  @property()
  size: 'xs' | 's' | 'm' | 'l' = 'm';

  @property()
  width: 'm' | 'l' | 'full' = 'm';

  protected abstract renderInner(): TemplateResult;

  render() {
    return html`
      <div
        class=${bem(null, {
          layout: this.layout,
          disabled: this.disabled,
          inverted: this.inverted,
        })}
      >
        ${this.label
          ? html`<label class=${bem('label', { size: this.size })}
              >${this.label}${this.layout === 'horizontal' ? ':' : ''}</label
            >`
          : null}

        <div class=${bem('wrap', { width: this.width })}>
          ${this.renderInner()}
          ${this.error && this.errorText
            ? html`<div class=${bem('error')}>${this.errorText}</div>`
            : null}
          ${this.comment
            ? html`<div class=${bem('comment')}>${this.comment}</div>`
            : null}
        </div>
      </div>
    `;
  }
}
