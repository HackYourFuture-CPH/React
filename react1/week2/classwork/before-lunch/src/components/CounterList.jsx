import { useState } from 'react';

import Counter from './Counter';

const counters = [
  { id: '1', limit: 5 },
  { id: '2'}
];

export default function CounterList (){
  const [counterList, setCounterList] = useState(counters);
  const [paused, setPaused] = useState(false);
  const [limit, setLimit] = useState(60);

  function addCounter () {
    setCounterList(counterList.concat([{ id: Date.now(), limit }]));
    // console.log(counters);
  }

  function deleteCounter(deleteId) {
    setCounterList(counterList.filter(({ id }) => id !== deleteId));
  }

  return (
    <>
      <input type="number" value={limit} onChange={e => setLimit(parseInt(e.target.value))} />
      <button onClick={addCounter}>Add counter!</button>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Play' : 'Pause'}</button>
      <ul>
        {counterList.map(({ limit, id }) => <Counter limit={limit} key={id} paused={paused}
          onDelete={() => deleteCounter(id)}
          />
        )} 
      </ul>
    </>
  )
}