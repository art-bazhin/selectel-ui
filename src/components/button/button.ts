import { html, customElement, property } from 'lit-element';
import { SuiElement } from '../../common/ts/sui-element';
import { createBemFn } from '../../common/ts/utils';

const ELEMENT_NAME = 'sui-button';
const bem = createBemFn(ELEMENT_NAME);

@customElement(ELEMENT_NAME)
export class SuiButton extends SuiElement {
  @property()
  text = '';

  @property()
  href = '';

  @property()
  target: '_blank' | '_parent' | '_self' | '_top' = '_self';

  @property()
  type: 'submit' | 'reset' | 'button' = 'submit';

  @property()
  size: 'xs' | 's' | 'm' | 'l' = 'm';

  @property()
  kind: 'primary' | 'secondary' = 'primary';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  inverted = false;

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number, reflect: false })
  count = 0;

  render() {
    const buttonClass = bem(null, {
      size: this.size,
      kind: this.kind,
      disabled: this.disabled,
      inverted: this.inverted,
    });

    return this.href
      ? html`<a href=${this.href} target=${this.target} class=${buttonClass}
          >${this.text}</a
        >`
      : html`<button type=${this.type} class=${buttonClass}>
          ${this.text}
        </button>`;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement;
//   }
// }
