import React, { useState } from "react";

import { log } from "../../log";

export interface CounterHistoryProps {
  history: { id: number; value: number }[];
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
      {history.map((count) => (
        // using index as key is not recommended, here it causes a problem with the selected state
        // when the list is re-ordered, the index of each item changes, so the selected state is not preserved
        // <HistoryItem key={index} count={count} />

        // using the array length as key is not recommended, here it causes a problem with the selected state because the key is always the same
        // <HistoryItem key={history.length} count={count} />

        // the keys must be unique. Adding unique id for every item in the array solves the problem
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
