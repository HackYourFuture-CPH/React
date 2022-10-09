import { useEffect } from 'react';
import { useState } from 'react';

export default function Counter ({
  limit = 60,
  paused: listPaused,
  onDelete,
}) {
  // console.log('render');
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(listPaused);

  const disabled = count >= limit;
  // console.log({ disabled });

  // global pause changed
  useEffect(() => {
    setPaused(listPaused);
  }, [listPaused]);

  // local pause changed
  useEffect(() => {
    // console.log('effect');

    const interval = setInterval(() => {
      // console.log('in effect interval', count);
      if(!paused && !disabled)
        setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused, disabled]);

  function handleClick () {
    // setCount(count + 1);
    setPaused(!paused);
    // console.log('in handler', count);
  }

  // console.log('in render', count);

  return (
    <li>
      {disabled && <span>Done!</span>}
      <button onClick={handleClick} disabled={disabled}>{paused ? 'Play' : 'Pause'} { count }/{ limit }</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}