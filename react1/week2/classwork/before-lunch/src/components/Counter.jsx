import { useEffect } from 'react';
import { useState } from 'react';

export default function Counter ({
  limit = 60,
  paused,
}) {
  console.log('render');
  const [count, setCount] = useState(0);

  const disabled = count >= limit;
  // console.log({ disabled });

  useEffect(() => {
    console.log('effect');

    const interval = setInterval(() => {
      // console.log('in effect interval', count);
      if(!paused)
        setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  function handleClick () {
    setCount(count + 1);
    // console.log('in handler', count);
  }

  // console.log('in render', count);

  return (
    <li>
      {disabled && <span>Done!</span>}
      <button onClick={handleClick} disabled={disabled}>{ count }/{ limit }</button>
    </li>
  )
}