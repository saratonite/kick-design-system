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
import Image from './components/Image'
const App = () => (
  <div>
    <GlobalStyles />
    <Heading>
      <GradientText>Kick Design</GradientText>
    </Heading>
    <Card>
      <Heading as="h3">Buttons</Heading>

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
    <Heading as="h3">Card</Heading>
      
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Soluta porro
        molestias perferendis obcaecati beatae, accusantium autem a earum quis!
        Quod voluptas sapiente ad minus ipsam dolorem rem eius provident ipsum.{" "}
      </p>{" "}
      <Card inline>
        <h2>Inline Card</h2>
        <div>
        <Button onClick={() => alert("Hello")}> Hello World😁 </Button>
        <Button onClick={() => alert("Hello")} fillColor> Hello World😁 </Button>
        </div>
      </Card>
    </Card>

    <Card>
      <Heading as="h3">Gradient Text</Heading>


      <GradientText>Colorfull</GradientText>
      <h4>
        <GradientText>Colorfull Heading </GradientText>
      </h4>
    </Card>


    {/* Header */}
    <Card>
      <Heading as="h3">Heading</Heading>

      <Heading>H1</Heading>
      <Heading as="h2">H2</Heading>
      <Heading as="h3">H3</Heading>
      <Heading as="h4">H4</Heading>
      <Heading as="h5">H5</Heading>
      <Heading as="h6">H6</Heading>
    </Card>

    <Card>
      <Heading as="h3">Links</Heading>

      <Link href="http://sarath.tk">Hello</Link>
      <Link href="http://sarath.tk" target="_blank">
        <GradientText>Colorfull link</GradientText>
      </Link>
    </Card>
    <Card>
    <Heading as="h3">Images</Heading>

      <Image triangle width="300px" height="300px" src="https://images.unsplash.com/photo-1547974497-bb2a93b333ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
      <Image circle width="300px" height="300px" src="https://images.unsplash.com/photo-1550621310-5b0598adcac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
      <Image width="300px" height="300px" src="https://images.unsplash.com/photo-1551294444-20efb855d547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
      <Card inline>
      <Image width="300px" height="300px" src="https://images.unsplash.com/photo-1551294444-20efb855d547?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/>
      </Card>
    </Card>
  </div>
);

render(<App />, document.querySelector("#app"));
