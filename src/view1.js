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
          letter-spacing: 1px;
          background-color: white;
          border: 1px solid black;
        }

        .display.is-error-true .operations,
        .display.is-error-true .result {
          color: red;
        }

        .operations,
        .result {
          height: 30px;
          white-space: nowrap;
          overflow: scroll;
          text-align: right;
          font-weight: 600;
        }

        .result {
          color: grey;
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
          font-weight: 400;
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
          font-weight: 600;
          text-decoration: none;
          outline: none;
          border: 1px solid black;
          user-select: none;
        }

        .cell:hover {
          cursor: pointer;
        }

        .cell:last-child {
          font-weight: 400;
          background-color: #cdd5f1;
        }

        .cell:active {
          box-shadow: inset 0 5px 5px rgba(0,0,0,.2);
        }

        .cell + .cell {
          border-left: 0;
        }

        .cell.clear {
          position: relative;
          background-color: #ffcf3e;
        }

        .cell.clear:active {
          background-color: #cdd5f1;
          transition: background-color 1s ease-out;
        }

        .clearSign {
          position: absolute;
          top: 16px;
          left: 20px;
          font-weight: 600;
        }

        .slashSign {
          position: absolute;
          top: 23px;
          left: 34px;
          transform: rotate(20deg);
          font-weight: 600;
        }

        .deleteSign {
          position: absolute;
          bottom: 15px;
          right: 20px;
        }

        .item {
          margin: 0 auto;
        }
      </style>
      <div class$="display is-error-[[error]]">
        <div class="operations">[[input]]</div>
        <div class="result">[[result]]</div>
      </div>
      <div class="pad">
        <div class="row isFirst">
          <button class="cell" on-click="onInput">
            <span class="item">(</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">)</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">%</span>
          </button>
          <button
            class="cell clear"
            on-click="onClick"
            on-mousedown="startTimer"
            on-touchstart="startTimer"
            on-touchend="cancelTimer"
            on-touchcancel="cancelTimer"
            on-touchleave="cancelTimer" >
            <span class="item clearSign">C</span>
            <span class="item slashSign">/</span>
            <span class="item deleteSign">❮</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="onInput">
            <span class="item">7</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">8</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">9</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">÷</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="onInput">
            <span class="item">4</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">5</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">6</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">×</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="onInput">
            <span class="item">1</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">2</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">3</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">-</span>
          </button>
        </div>

        <div class="row">
          <button class="cell" on-click="onInput">
            <span class="item">0</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">.</span>
          </button>
          <button class="cell" on-click="calculate">
            <span class="item">=</span>
          </button>
          <button class="cell" on-click="onInput">
            <span class="item">+</span>
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
      },
      longpress: {
        type: Boolean,
        value: false,
      },
      isError: {
        type: Boolean,
        value: false,
      },
      timer: {
        value: function() {
          this.clear();
        },
      }
    };
  }

  onInput(e) {
    if (this.error) {
      this.error = false;
      this.result = '';
    }

    this.input += e.target.innerText.toString().trim();

    const options = {
      auto: true,
    }

    this.calculate(options);
  }

  onClick() {
    if (!this.input) return;

    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    if (this.longpress) {
      return false;
    }

    clearTimeout(this.timer);
    this.input = this.input.slice(0, -1);
  }

  startTimer(e) {
    if (!this.input || e.type === 'click') {
      return;
    }

    this.longpress = false;

    this.timer = setTimeout(() => {
      this.longpress = true;
      this.clear();
    }, 850);

    return false;
  }

  cancelTimer() {
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  clear() {
    this.input = this.result = '';
  }

  calculate({ auto }) {
    if (!this.input) return;

    const input = this.input.replace(/×/g, '*').replace(/÷/g, '/');

    try {
      const result = parseFloat(eval(input), 10);
      this.result = result % 1 === 0 ? result : this.roundToTen(result);
    } catch(e) {
      if (auto) return;
      this.result = 'Bad expression';
      this.error = true;
    }
  }

  roundToTen(num) {
    return Math.round(num + "e+10")  + "e-10";
  }
}

window.customElements.define('my-view1', Calculator);
