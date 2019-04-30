import React from "react";

import { storiesOf, configure } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import Card from "../src/components/Card";
import Heading from "../src/components/Heading";
import GradientText from "../src/components/GradientText";

storiesOf("Welcome", module).add("to Storybook", () => (
  <div>
    <Heading>
      <GradientText>Kick Design</GradientText>
    </Heading>
    <p>Welcome to kick design</p>
  </div>
));

function loadStories() {
  // You can require as many stories as you need.
  require("../src/components/Button.story");
  require("../src/components/Card.story");
  require("../src/components/Gradient.story");
  require("../src/components/Heading.story");
}

configure(loadStories, module);
