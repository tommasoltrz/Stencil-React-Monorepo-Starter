'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cdbf7e33.js');

const myButtonCss = ":host{display:block}.btn{background:var(--color-mono-10);color:var(--color-mono-70);border-radius:4px;border:none;padding:0 12px;height:38px;outline:none;transition:0.1s ease-in-out;cursor:pointer;font-weight:500;display:flex;align-items:center;justify-content:center;font-family:inherit}.btn.primary{background:red;color:var(--color-white)}.btn.primary:hover{background:var(--color-primary-70)}.btn.secondary{background:var(--color-mono-50);color:var(--color-white)}.btn.secondary:hover{background:var(--color-mono-70)}.btn.tertiary{background:var(--color-primary-05);color:var(--color-primary-50)}.btn.tertiary:hover{color:var(--color-primary-70);background:var(--color-primary-10)}.btn.warning{background:var(--color-warning-50);color:var(--color-void)}.btn.warning:hover{background:var(--color-warning-70)}.btn.danger{background:var(--color-danger-50);color:var(--white)}.btn.danger:hover{background:var(--color-danger-70)}";

let MyButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("button", { class: `btn ${this.appearance}`, type: "button" }, this.text));
  }
};
MyButton.style = myButtonCss;

function format(first, middle, last) {
  return ((first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

let MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.nameClicked = index.createEvent(this, "nameClicked", 7);
  }
  render() {
    const fullText = this.getText();
    return (index.h("div", { onClick: () => this.nameClicked.emit(fullText) }, "Hello, World! I'm ", fullText));
  }
  getText() {
    var _a;
    return format(this.first, (_a = this.middle) === null || _a === void 0 ? void 0 : _a.join(" "), this.last);
  }
};
MyComponent.style = myComponentCss;

exports.my_button = MyButton;
exports.my_component = MyComponent;
