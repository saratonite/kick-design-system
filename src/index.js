import React, { Component } from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,200.300,400');
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`;

import Button from "./components/Button";
import Card from "./components/Card";
import GradientText from "./components/GradientText";
import Link from "./components/Link";
const App = () => (
  <div>
    <GlobalStyles />
    <h1>
      <GradientText>Kick Design</GradientText>
    </h1>
    <Card>
      <h3>Buttons</h3>
      <Button primary onClick={() => alert("Hello")}>
        Button Primary😋{" "}
      </Button>{" "}
      <Button onClick={() => alert("Hello")}> Hello World😁 </Button>
      <Button onClick={() => alert("Hello")} block>
        Button Block
      </Button>
      <Button onClick={() => alert("Hello")} fill>
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
