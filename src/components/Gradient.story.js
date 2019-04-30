import React from "react";
import { storiesOf } from "@storybook/react";
import GradientText from "./GradientText";

storiesOf("GradientText")
  .add("GradientText ", () => <GradientText>Hello World</GradientText>)
  .add("Heading ", () => (
    <h1>
      <GradientText>Hello Universe</GradientText>
    </h1>
  ));
