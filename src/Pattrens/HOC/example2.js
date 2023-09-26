import React from "react";
import { withLoader } from "./Example/hoc/withLoader";

const UnorderedList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <div style={{ paddingBottom: "1em" }}>
            <li>{`Name ${item?.name}`}</li>
            <li>{`City ${item?.city}`}</li>
          </div>
        );
      })}
    </ul>
  );
};

function Example2({ data }) {
  return <UnorderedList data={data} />;
}

export default withLoader(
  Example2,
  "https://house-lydiahallie.vercel.app/api/listings"
);

/*
Your App.js

import React from "react";
import Example2 from "./Pattrens/HOC/example2";

export default class App extends React.Component {
  render() {
    return <Example2 />;
  }
}
*/
