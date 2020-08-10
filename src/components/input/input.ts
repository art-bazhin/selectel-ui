import { html, customElement, property } from 'lit-element';
import { createBemFn } from '../../common/ts/utils';
import { SuiField } from '../field/field';

const ELEMENT_NAME = 'sui-input';
const bem = createBemFn(ELEMENT_NAME);

@customElement(ELEMENT_NAME)
export class SuiInput extends SuiField {
  @property()
  value = '';

  @property()
  placeholder = '';

  @property()
  type: 'text' | 'password' | 'email' = 'text';

  private handleInput(e: Event) {
    const newValue = (e.target as HTMLInputElement).value;
    if (newValue === this.value) return;

    this.value = newValue;
  }

  renderInner() {
    const inputClass = bem(null, {
      error: this.error,
      size: this.size,
      inverted: this.inverted,
    });

    return html`<input
      .value=${this.value}
      type=${this.type}
      placeholder=${this.placeholder}
      class=${inputClass}
      @input=${this.handleInput}
    />`;
  }
}
