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

        .display {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 288px;
          width: 100%;
          margin: 0 auto;
          padding: 6px 8px;
          font-size: 20px;
          background-color: white;
          border: 1px solid black;
        }

        .operations {
          height: 30px;
          white-space: nowrap;
          overflow: scroll;
          direction: rtl;
        }

        .result {
          height: 30px;
          white-space: no-wrap;
          overflow: scroll;
          direction: rtl;
        }

        .pad {
          max-width: 288px;
          width: 100%;
          margin: 16px auto 0;
        }

        .row {
          display: flex;
        }

        .row.isFirst .cell:not(:last-child) {
          background-color: #ffcf3e;
        }

        .row + .row .cell {
          border-top: 0;
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

        .cell + .cell {
          border-left: 0;
        }

        .item {
          margin: 0 auto;
        }
      </style>
      <div class="display">
        <div class="operations">[[input]]</div>
        <div class="result"></div>
      </div>
      <div class="pad">
        <div class="row isFirst">
          <button class="cell" on-click="handleClick">
            <span class="item">C</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">(</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">)</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">÷</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="handleClick">
            <span class="item">7</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">8</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">9</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">×</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="handleClick">
            <span class="item">4</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">5</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">6</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">-</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="handleClick">
            <span class="item">1</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">2</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">3</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">+</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="handleClick">
            <span class="item">0</span>
          </button>
          <button class="cell" on-click="handleClick">
            <span class="item">.</span>
          </button>
          <button class="cell" on-click="handleClick">
            <div class="cell-plus">+</div>
            <div class="cell-slash">/</div>
            <div class="cell-minus">-</div>
            </button>
          <button class="cell" on-click="handleClick">
            <span class="item">=</span>
          </button>
        </div>
      </div>
    `;
  }

  static get properties () {
    return {
      input: {
        type: String,
        value: '',
      }
    };
  }

  handleClick(e) {
    // document.querySelector('.operations').innerHTML += e.target.innerHTML;
    // console.log()
    this.input += e.target.innerText.trim();
    // debugger;
    // document.querySelector('.cell').click(event => {
    //   const thingClicked = this.innerHTML;
    //   console.log("you clicked: ", thingClicked)
    //    $("#currentValue").html(thingClicked)
    //  })
  }
}

window.customElements.define('my-view1', Calculator);
