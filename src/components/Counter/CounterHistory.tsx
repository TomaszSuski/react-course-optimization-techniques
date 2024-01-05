import React, { useState } from "react";

import { log } from "../../log";

export interface CounterHistoryProps {
  history: number[];
}

interface HistoryItemProps {
  count: number;
}

function HistoryItem({ count }: HistoryItemProps) {
  log("<HistoryItem /> rendered", 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? "selected" : undefined}>
      {count}
    </li>
  );
}

export default function CounterHistory({ history }: CounterHistoryProps) {
  log("<CounterHistory /> rendered", 2);

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} />
      ))}
    </ol>
  );
}
