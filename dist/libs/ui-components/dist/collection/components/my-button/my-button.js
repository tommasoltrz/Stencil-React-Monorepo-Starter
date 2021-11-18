import { Component, h, Prop } from "@stencil/core";
export class MyButton {
  render() {
    return (h("button", { class: `btn ${this.appearance}`, type: "button" }, this.text));
  }
  static get is() { return "my-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-button.css"]
  }; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    },
    "appearance": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "appearance",
      "reflect": false
    }
  }; }
}
