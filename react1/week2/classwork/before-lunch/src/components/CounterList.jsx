import { useState } from 'react';

import Counter from './Counter';

const counters = [
  { id: '1', limit: 5 },
  { id: '2'}
];

export default function CounterList (){
  const [counterList, setCounterList] = useState(counters);
  const [paused, setPaused] = useState(false);

  function addCounter () {
    setCounterList(counterList.concat([{ id: Date.now() }]));
    // console.log(counters);
  }

  return (
    <>
      <button onClick={addCounter}>Add counter!</button>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Play' : 'Pause'}</button>
      <ul>
        {counterList.map(({ limit, id }) => <Counter limit={limit} key={id} paused={paused} />)} 
      </ul>
    </>
  )
}