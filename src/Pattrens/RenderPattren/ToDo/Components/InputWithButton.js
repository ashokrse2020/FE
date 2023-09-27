import { useState } from "react";

export default function InputWithButton({ onAction = () => {}, render }) {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onAction({
      type: "ON_CHANGE",
      value: inputValue,
    });
  };

  const onClick = () => {
    const valueToAdd = {
      desc: value,
    };
    setList([...list, valueToAdd]);
    onAction({
      type: "SUBMIT",
      value: [...list, valueToAdd],
    });
    setValue("");
  };

  console.log("Ashok valueToAdd", list);

  return (
    <div>
      <label>{"New task"}</label>
      <input value={value} onChange={onInputChange}></input>
      <button onClick={onClick}>{"Add Task"}</button>
      {render(list)}
    </div>
  );
}
