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

        .operations,
        .result {
          height: 30px;
          white-space: nowrap;
          overflow: scroll;
          text-align: right;
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
          width: 72px;
          height: 72px;
          display: flex;
          justify-content: center;
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
        <div class="result">[[result]]</div>
      </div>
      <div class="pad">
        <div class="row isFirst">
          <button class="cell" on-click="deletePrevious">
            <span class="item"><</span>
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
            <span class="item">+/-</span>
            </button>
          <button class="cell" on-click="calculate">
            <span class="item">=</span>
          </button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      input: {
        type: String,
        value: '',
      },
      result: {
        type: String,
        value: '',
      }
    };
  }

  handleClick(e) {
    this.input += e.target.innerText.toString().trim();
  }

  deletePrevious() {
    if (!this.input) return;
    this.input = this.input.slice(0, -1);
  }

  clear() {
    this.input = this.result = '';
  }

  calculate() {
    if (!this.input) return;

    const input = this.input.replace(/×/g, '*').replace(/÷/g, '/')

    this.result = eval(input);
  }
}

window.customElements.define('my-view1', Calculator);
