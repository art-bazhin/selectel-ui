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
  layout: 'horizontal' | 'vertical' = 'vertical';

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
          ? html`<label class=${bem('label')}>${this.label}</label>`
          : null}

        <div>
          ${this.renderInner()}
        </div>

        ${this.error && this.errorText
          ? html`<div class=${bem('error')}>${this.errorText}</div>`
          : null}
        ${this.comment
          ? html`<div class=${bem('comment')}>${this.comment}</div>`
          : null}
      </div>
    `;
  }
}
