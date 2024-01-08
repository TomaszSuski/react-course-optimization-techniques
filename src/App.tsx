import React, { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import { log } from "./log";
import ConfigureCounter from "./components/Counter/ConfigureCounter";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(count: number) {
    setChosenCount(count);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        <Counter initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
