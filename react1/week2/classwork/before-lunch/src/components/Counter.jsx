import { useState } from 'react';

export default function Counter () {
  console.log('render');
  const [count, setCount] = useState(0);

  const disabled = count === 5;
  console.log({ disabled });

  function handleClick () {
    setCount(count + 1);
    console.log('in handler', count);
  }

  console.log('in render', count);

  return <button onClick={handleClick} disabled={disabled}>{ count }</button>
}