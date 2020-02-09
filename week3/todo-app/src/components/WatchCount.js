import React, { useState, useEffect } from "react";

function WatchCount() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
        const timer = setTimeout(() => {
                setCount(count => count + 1);
            }, 1000);    
        return (() => {
            clearTimeout(timer)
        }); 
    });

    return (
      <div>
        <h3>You have used {count} seconds on this website</h3>
      </div>
    );
  }

export default WatchCount;