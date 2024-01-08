import React, { memo, useCallback, useState, useMemo } from "react";

import IconButton from "../UI/IconButton";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
import CounterOutput from "./CounterOutput";
import { log } from "../../log.js";
import CounterHistory from "./CounterHistory";

export interface CounterProps {
  initialCount: number;
}

function isPrime(number: number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

//using memo() to avoid re-rendering when props are not changed, even if parent cpomponent is re-rendered
const Counter = memo(function Counter({ initialCount }: CounterProps) {
  log("<Counter /> rendered", 1);

  // useMemo() to avoid re-calculating the value on every re-render
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  // const [counter, setCounter] = useState(initialCount);
  // now tracking counter changes in an array
  const [counterChanges, setCounterChanges] = useState([initialCount]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange,
    0
  );

  // useCallback() to avoid re-creating the function on every re-render while memo() is used on the component accepting the function as prop
  const handleDecrement = useCallback(function handleDecrement() {
    // setCounter((prevCounter) => prevCounter - 1);
    setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
  }, []);

  const handleIncrement = useCallback(function handleIncrement() {
    // setCounter((prevCounter) => prevCounter + 1);
    setCounterChanges((prevCounterChanges) => [1, ...prevCounterChanges]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;
