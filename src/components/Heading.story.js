import React from "react";
import { storiesOf } from "@storybook/react";
import Heading from "./Heading";
import Card from "./Card";

storiesOf("Heading").add("h1 to h6", () => (
  <Card>
    <h2> Headings </h2>
    <div>
      <Heading>H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </div>
  </Card>
));
