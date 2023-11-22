import React, { useState } from "react";

const CounterFunctional = ({ initialValue = 0, step = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      Counter Functional: {counter}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default CounterFunctional;