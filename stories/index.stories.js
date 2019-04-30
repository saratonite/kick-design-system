import React from "react";

import { storiesOf, configure } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

function loadStories() {
  // You can require as many stories as you need.
  require("../src/components/Button.story");
  require("../src/components/Card.story");
  require("../src/components/Gradient.story");
}

configure(loadStories, module);
