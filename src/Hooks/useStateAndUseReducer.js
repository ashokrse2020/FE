import React, { useCallback, useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  
  function reducer(state, action){
    if(action.type === 'INCREMENT') {
      return { ...state, age: state.age + 1};
    }
    if(action.type === 'DECREMENT') {
      return { ...state, age: state.age - 1};
    }
    console.log("Ashok the state is", state.age);
    console.log("Ashok the action is", action); 
  }

  const [count, setCount] = useState(0);
  const [state, empDispatch] = useReducer(reducer, { age: 21 });

  const onIncrement = useCallback(() => {
    console.log("Ashok count is", count);
    setCount(count + 1);
  }, [count]);

  const onDecrement = useCallback(() => {
    setCount(count - 1);
  }, [count])

  return (
    <div>
      <div>{'Ashokr'}</div>
      <p><span>{'Count: '}</span>{count}</p>
      <button onClick={onIncrement}>{'increment'}</button>
      <button onClick={onDecrement}>{'decrement'}</button>
      <br/>
      <div>{'Ashokr'}</div>
      <p><span>{'emp Age: '}</span>{state.age}</p>
      <button onClick={() => empDispatch({ type: 'INCREMENT' })}>{'increment'}</button>
      <button onClick={() => empDispatch({ type: 'DECREMENT'})}>{'decrement'}</button>
    </div>
  );
}

export default App;
