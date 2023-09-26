// https://www.patterns.dev/posts/singleton-pattern
//https://javascriptpatterns.vercel.app/patterns/design-patterns/singleton-pattern

import React from 'react';

let counter = 0;
let instance;

class SingletonCounter {
  constructor() {
    if(instance) {
      throw new Error('You can create only one instance');
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return counter++;
  }

  decrement() {
    return counter--;
  }

};

const onlyOneInstanceCounter = Object.freeze(new SingletonCounter());
export default onlyOneInstanceCounter;