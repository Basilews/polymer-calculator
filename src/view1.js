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
          max-width: 320px;
          margin: 0 auto;
          padding: 16px;
        }

        .operations {
          max-width: 288px;
          width: 100%;
          height: 40px;
          padding: 6px 8px;
          font-size: 20px;
          background-color: white;
          border: 1px solid black;
        }

        .pad {
          max-width: 288px;
          width: 100%;
          margin-top: 16px;
        }

        .row {
          display: flex;
        }

        .cell {
          position: relative;
          width: 72px;
          height: 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: white;
          font-size: 20px;
          text-decoration: none;
          outline: none;
          border: 1px solid black;
        }

        .cell:hover {
          cursor: pointer;
        }

        .cell:last-child {
          background-color: #cdd5f1;
        }

        .cell:active {
          box-shadow: inset 0 5px 5px rgba(0,0,0,.2);
        }

        .item {
          margin: 0 auto;
        }
      </style>
      <div class="operations">0</div>
      <div class="pad">
        <div class="row">
          <button class="cell">
            <span class="item"><</span>
          </button>
          <button class="cell">
            <span class="item">(</span>
          </button>
          <button class="cell">
            <span class="item">)</span>
          </button>
          <button class="cell">
            <span class="item">÷</span>
          </button>
        </div>

        <div class="row">
          <button class="cell">
            <span class="item">7</span>
          </button>
          <button class="cell">
            <span class="item">8</span>
          </button>
          <button class="cell">
            <span class="item">9</span>
          </button>
          <button class="cell">
            <span class="item">x</span>
          </button>
        </div>

        <div class="row">
          <button class="cell">
            <span class="item">4</span>
          </button>
          <button class="cell">
            <span class="item">5</span>
          </button>
          <button class="cell">
            <span class="item">6</span>
          </button>
          <button class="cell">
            <span class="item">-</span>
          </button>
        </div>

        <div class="row">
          <button class="cell">
            <span class="item">1</span>
          </button>
          <button class="cell">
            <span class="item">2</span>
          </button>
          <button class="cell">
            <span class="item">3</span>
          </button>
          <button class="cell">
            <span class="item">+</span>
          </button>
        </div>

        <div class="row">
          <button class="cell">
            <span class="item">0</span>
          </button>
          <button class="cell">
            <span class="item">.</span>
          </button>
          <button class="cell">
            <div class="cell-plus">+</div>
            <div class="cell-slash">/</div>
            <div class="cell-minus">-</div>
            </button>
          <button class="cell">
            <span class="item">=</span>
          </button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view1', Calculator);
