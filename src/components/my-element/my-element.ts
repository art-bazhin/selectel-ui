/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { html, customElement, property, css } from 'lit-element';
import { SuiElement } from '../../common/ts/sui-element';
import { createBemFn } from '../../common/ts/utils';

const ELEMENT_NAME = 'my-element';
const bem = createBemFn(ELEMENT_NAME);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(ELEMENT_NAME)
export class MyElement extends SuiElement {
  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'Art';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number, reflect: false })
  count = 0;

  render() {
    return html`
      <h1 class=${bem('heading', { size: 'xl' })}>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement;
//   }
// }
