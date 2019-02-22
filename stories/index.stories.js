import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../src/components/Button";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button")
  .add("Default button", () => <Button> 😎 Hello</Button>)
  .add("Primary button", () => <Button primary> 😀Hello 👍</Button>);
