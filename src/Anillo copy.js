import React from "react";

export default function Anillo() {
  return React.createElement(
    "div",
    { className: "has-text-centered" },
    React.createElement(
      "svg",
      {
        width: "200",
        height: "200",
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        "aria-labelledby": "title desc",
      },
      [
        React.createElement("title", { id: "title", key: "t" }, "Logo contador"),
        React.createElement(
          "desc",
          { id: "desc", key: "d" },
          "Isotipo circular con anillo y flechas arriba/abajo representando incremento y decremento."
        ),
        React.createElement(
          "defs",
          { key: "defs" },
          React.createElement(
            "linearGradient",
            { id: "g-ring", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            [
              React.createElement("stop", {
                offset: "0%",
                stopColor: "#38BDF8",
                key: "s1",
              }),
              React.createElement("stop", {
                offset: "100%",
                stopColor: "#6366F1",
                key: "s2",
              }),
            ]
          )
        ),
        React.createElement("circle", {
          cx: "128",
          cy: "128",
          r: "100",
          stroke: "url(#g-ring)",
          strokeWidth: "16",
          fill: "none",
          key: "c",
        }),
        React.createElement("path", {
          d: "M128 60 L112 88 H144 Z",
          fill: "#22C55E",
          key: "up",
        }),
        React.createElement("path", {
          d: "M128 196 L144 168 H112 Z",
          fill: "#EF4444",
          key: "down",
        }),
        React.createElement("rect", {
          x: "108",
          y: "108",
          width: "40",
          height: "40",
          rx: "8",
          fill: "#1E293B",
          key: "rect",
        }),
        React.createElement(
          "text",
          {
            x: "128",
            y: "136",
            textAnchor: "middle",
            fontFamily: "Inter, sans-serif",
            fontSize: "28",
            fontWeight: "700",
            fill: "white",
            key: "txt",
          },
          "0"
        ),
      ]
    )
  );
}
