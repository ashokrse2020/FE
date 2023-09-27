import React from "react";

export default function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{item.desc}</li>;
      })}
    </ul>
  );
}
