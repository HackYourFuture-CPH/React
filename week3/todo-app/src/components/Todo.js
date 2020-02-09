import React from 'react';
export default function Todo ({completed, title, thisDelete, thisToggle}) {
  
    return (
      <li style={{textDecoration : completed ? "line-through" : ""}}>{title}
        <span>
          <input checked={completed} onChange={thisToggle} type="checkbox"/>
        </span> 
        <span>
          <button onClick={thisDelete}>Delete</button>
        </span>
      </li>
    )
  }