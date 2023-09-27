import React, { useState } from "react";
import InputWithButton from "./Components/InputWithButton";
import List from "./Components/List";

export default function ToDoWrapper() {
  return (
    <div>
      <InputWithButton
        render={(value) => {
          return <List items={value} />;
        }}
      />
    </div>
  );
}
