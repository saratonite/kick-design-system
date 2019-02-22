import React, { Component } from "react";
import { render } from "react-dom";

import Button from "./components/Button";
const App = () => (
  <div>
    <Button primary onClick={() => alert("Hello")}>
      Button Primary 😋
    </Button>
    <Button onClick={() => alert("Hello")}>Hello World 😁 </Button>
  </div>
);

render(<App />, document.querySelector("#app"));
