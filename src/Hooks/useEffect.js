//https://dev.to/abhisheknaiidu/10-react-hooks-explained-3ino

import React, { useCallback, useEffect, useReducer } from "react";

export default function App() {

  const reducer = useCallback((state, action) => {
    return { state, count: state.count + 1 };
  });
  
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  // useEffect(() => {
  //   console.log("// this will run when the component mounts and anytime the stateful data changes");
  // })

  // useEffect(() => {
  //   console.log("// this will run, when the component is first initialized");
  // }, []);

  useEffect(() => {
    return () => {
      alert("/ this will run when the component is destroyed or before the component is removed from UI.");
    }
  }, [state.count])

  return (<div>
    {'Ashok'}
    <p>{`Count is ${state.count}`}</p>
    <button onClick={() => dispatch('INC')}>Increment</button>
  </div>)
};