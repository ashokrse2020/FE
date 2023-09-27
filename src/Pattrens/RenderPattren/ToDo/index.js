import React, { useState } from "react";
import ToDoWrapper from "./ToDoWrapper";

export default function ToDo() {
  return (
    <div>
      {"To Do List"}
      <br />
      <br />
      <ToDoWrapper />
    </div>
  );
}

/*
//https://www.patterns.dev/posts/render-props-pattern

import React, { useState } from "react";
import ToDo from "./Pattrens/RenderPattren/ToDo";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
}
*/
