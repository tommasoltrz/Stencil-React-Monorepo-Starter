import { h } from "@stencil/core";

export default {
  title: "MyButton",
  args: {
    text: "I am a button",
    appearance: "primary",
  },
  argTypes: {
    appearance: {
      options: ["primary", "secondary", "tertiary", "warning", "danger"],
      control: { type: "radio" },
    },
  },
};

export const Primary = (args) => {
  return <my-button {...args}></my-button>;
};
