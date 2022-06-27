import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lana",
      animal: "Dog",
      breed: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Ethan",
      animal: "Dog",
      breed: "Maltipoo",
    }),
    React.createElement(Pet, {
      name: "Kiba",
      animal: "Cat",
      breed: "Siamese",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
