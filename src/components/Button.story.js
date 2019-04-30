import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button Story")
  .add("Default button", () => <Button> 😎Hello </Button>)
  .add("Primary button", () => <Button primary> 😀Hello👍 </Button>);
