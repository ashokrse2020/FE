//https://www.patterns.dev/posts/render-props-pattern

import React, { useState } from "react";
import { Input } from "antd";

const InputBox = (props) => {
  const [value, setValue] = useState(0);

  const onChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div>
      <Input value={value} onChange={onChange} />
      {props.children(value)}
    </div>
  );
};

const Kelvin = ({ value }) => {
  return <p>{`${value + 273.15}k`}</p>;
};

const Fahrenheit = ({ value }) => {
  const inFahren = (value * 9) / 5 + 32;
  return <p>{`${inFahren}°F`}</p>;
};

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <InputBox
//           render={(value) => {
//             return (
//               <div>
//                 <Kelvin value={value} />
//                 <Fahrenheit value={value} />
//               </div>
//             );
//           }}
//         />
//       </div>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>{"Render Props as child prop"}</p>
        <InputBox>
          {(value) => (
            <div>
              <Kelvin value={value} />
              <Fahrenheit value={value} />
            </div>
          )}
        </InputBox>
      </div>
    );
  }
}
