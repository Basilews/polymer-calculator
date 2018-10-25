/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class Calculator extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .pad {
          max-width: 220px;
          margin: 0 auto;
        }
        .row {
          display: flex;
        }
        .cell {
          position: relative;
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
        }
        .cell:hover {
          cursor: pointer;
        }
        .item {
          margin: 0 auto;
        }
      </style>

      <div class="pad">
        <div class="row">
          <div class="cell">
            <span class="item"><</span>
          </div>
          <div class="cell">
            <span class="item">(</span>
          </div>
          <div class="cell">
            <span class="item">)</span>
          </div>
          <div class="cell">
            <span class="item">÷</span>
          </div>
        </div>

        <div class="row">
          <div class="cell">
            <span class="item">7</span>
          </div>
          <div class="cell">
            <span class="item">8</span>
          </div>
          <div class="cell">
            <span class="item">9</span>
          </div>
          <div class="cell">
            <span class="item">x</span>
          </div>
        </div>

        <div class="row">
          <div class="cell">
            <span class="item">4</span>
          </div>
          <div class="cell">
            <span class="item">5</span>
          </div>
          <div class="cell">
            <span class="item">6</span>
          </div>
          <div class="cell">
            <span class="item">-</span>
          </div>
        </div>

        <div class="row">
          <div class="cell">
            <span class="item">1</span>
          </div>
          <div class="cell">
            <span class="item">2</span>
          </div>
          <div class="cell">
            <span class="item">3</span>
          </div>
          <div class="cell">
            <span class="item">+</span>
          </div>
        </div>

        <div class="row">
          <div class="cell">
            <span class="item">0</span>
          </div>
          <div class="cell">
            <span class="item">.</span>
          </div>
          <div class="cell">
            <div class="cell-plus">+</div>
            <div class="cell-slash">/</div>
            <div class="cell-minus">-</div>
          </div>
          <div class="cell">
            <span class="item">=</span>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view1', Calculator);
