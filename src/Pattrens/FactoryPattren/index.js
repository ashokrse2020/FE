//https://www.patterns.dev/posts/factory-pattern

import React from 'react';

function getCustomer(firstName, lastName) {
  return {
    firstName,
    lastName,
    getFullName: () => {
      return `${firstName} ${lastName}`;
    }
  }
}

const firstCustomer = getCustomer("Ashok", "Seervi");
console.log("Full name of first customer is", firstCustomer.getFullName())

export default function App(){ 
  return (
  <div>
    <p>{'Factory Pattren'}</p>
  </div>
  );
}