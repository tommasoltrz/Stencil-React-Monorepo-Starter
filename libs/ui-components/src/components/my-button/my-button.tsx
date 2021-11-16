import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.scss",
  shadow: true,
})
export class MyButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }
}
