import { storiesOf } from "@storybook/html";
import { h } from "@stencil/core";
import readme from "./readme.md";

storiesOf("My Component", module).add(
  "Default",
  () => (
    <my-component
      first="a Web Component / Custom Element"
      middle={["with complex prop passing and easy event binding", "for React"]}
      last="thanks to Stencil"
    />
  ),
  {
    notes: {
      markdown: readme,
    },
  }
);
