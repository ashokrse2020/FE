import React, { useEffect, useState } from "react";
import { Spin } from "antd";

export function withLoader(Component, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
          .then((res) => res.json())
          .then(({ listings }) => setData(listings));
      }, 3000);
    }, []);

    console.log("Ashok data", data);

    if (!data) return <Spin />;
    return <Component data={data} />;
  };
}
