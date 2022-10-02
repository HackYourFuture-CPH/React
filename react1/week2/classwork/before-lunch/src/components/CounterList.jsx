import { useState } from 'react';

import Counter from './Counter';

const counters = [
  { id: '1', limit: 3 },
  { id: '2'}
];

export default function CounterList (){
  const [counterList, setCounterList] = useState(counters);

  function addCounter () {
    setCounterList(counterList.concat([{ id: '' + (counterList.length + 1) }]));
    // console.log(counters);
  }

  return (
    <>
      <button onClick={addCounter}>Add counter!</button>
      {counterList.map(({ limit, id }) => <Counter limit={limit} key={id} />)} 
    </>
  )
}