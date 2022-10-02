import { useState } from 'react';

export default function Counter ({
  limit = 5
}) {
  console.log('render');
  const [count, setCount] = useState(0);

  const disabled = count === limit;
  console.log({ disabled });

  function handleClick () {
    setCount(count + 1);
    console.log('in handler', count);
  }

  console.log('in render', count);

  return (
    <li>
      {disabled && <span>Done!</span>}
      <button onClick={handleClick} disabled={disabled}>{ count }/{ limit }</button>
    </li>
  )
}