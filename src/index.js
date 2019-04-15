import React, { Component } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 10px;

  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,200.300,400');
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
  }
`;

import Button from "./components/Button";
import Card from "./components/Card";
import GradientText from "./components/GradientText";
import Link from "./components/Link";
import Heading from "./components/Heading"
const App = () => (
  <div>
    <GlobalStyles />
    <Heading>
      <GradientText>Kick Design</GradientText>
    </Heading>
    <Card>
      <h3>Buttons</h3>
      <Button primary onClick={() => alert("Hello")}>
        Button Primary😋{" "}
      </Button>{" "}
      <Button onClick={() => alert("Hello")}> Hello World😁 </Button>
      <Button onClick={() => alert("Hello")} block>
        Button Block
      </Button>
      <Button onClick={() => alert("Hello")} fillColor>
        Filled button
      </Button>
    </Card>

    <Card>
      <h3>Card</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Soluta porro
        molestias perferendis obcaecati beatae, accusantium autem a earum quis!
        Quod voluptas sapiente ad minus ipsam dolorem rem eius provident ipsum.{" "}
      </p>{" "}
      <Card inline>
        <h2>Inline Card</h2>
      </Card>
    </Card>

    <Card>
      <h3>Gradient Text</h3>

      <GradientText>Colorfull</GradientText>
      <h4>
        <GradientText>Colorfull Heading </GradientText>
      </h4>
    </Card>


    {/* Header */}
    <Card>
      <h3>Header</h3>
      <Heading>H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </Card>

    <Card>
      <h3>Link</h3>
      <Link href="http://sarath.tk">Hello</Link>
      <Link href="http://sarath.tk" target="_blank">
        <GradientText>Colorfull link</GradientText>
      </Link>
    </Card>
  </div>
);

render(<App />, document.querySelector("#app"));
