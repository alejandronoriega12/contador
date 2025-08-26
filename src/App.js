import React from "react";
import Anillo from "./Anillo";
export default function App() {
  return React.createElement(
    "section",
    { className: "hero is-fullheight is-dark is-bold" },
    React.createElement(
      "div",
      { className: "hero-body" },
      React.createElement(
        "div",
        { className: "container has-text-centered" },
        [
          React.createElement(
            "h1",
            { className: "title is-2", key: "h1" },
            "Circullo Contador"
          ),
          React.createElement(Anillo, { key: "anillo" }),
          React.createElement(
            "p",
            { className: "subtitle is-5 mt-4", key: "p" },
          
          ),
        ]
      )
    )
  );
}
