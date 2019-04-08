import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../src/components/Button";
import Card from "../src/components/Card";
import GradientText from "../src/components/GradientText";
storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

// Button Story

storiesOf("Button")
  .add("Default button", () => <Button> 😎Hello </Button>)
  .add("Primary button", () => <Button primary> 😀Hello👍 </Button>);

// Card Story

storiesOf("Card")
  .add("Default Card", () => <Card> Coolest card </Card>)
  .add("Card with buttons", () => (
    <Card>
      <h2> Love this </h2>{" "}
      <p>
        <Button> 😎Hello </Button> <Button primary> 😀Hello👍 </Button>{" "}
      </p>{" "}
    </Card>
  ))
  .add("Card with round property", () => (
    <Card round="10px">
      <h2> Little more rounded </h2>{" "}
    </Card>
  ))

  .add("Dark card", () => (
    <Card dark>
      <h2> Dark card </h2>{" "}
    </Card>
  ));

// GradientText
storiesOf("GradientText")
  .add("GradientText ", () => <GradientText>Hello World</GradientText>)
  .add("Heading ", () => (
    <h1>
      <GradientText>Hello Universe</GradientText>
    </h1>
  ));
