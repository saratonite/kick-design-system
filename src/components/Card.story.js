import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import Button from "./Button";

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
