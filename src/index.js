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
const App = () => (
  <div>
    <GlobalStyles />

    <Card>
      Hello World
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta porro
        molestias perferendis obcaecati beatae, accusantium autem a earum quis!
        Quod voluptas sapiente ad minus ipsam dolorem rem eius provident ipsum.
      </p>
      <p>
        <Button primary onClick={() => alert("Hello")}>
          Button Primary😋{" "}
        </Button>{" "}
        <Button onClick={() => alert("Hello")}> Hello World😁 </Button>{" "}
      </p>
    </Card>
  </div>
);

render(<App />, document.querySelector("#app"));
