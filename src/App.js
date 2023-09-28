//https://react.dev/learn/reusing-logic-with-custom-hooks

import React, { useState } from "react";
import Form from "./Pattrens/CustomHooks/Example2/index";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
