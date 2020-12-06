import React, { useState, useEffect } from 'react';
import './dogWiki.css'

export function DogList() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      const result = await fetch('https://dog.ceo/api/breeds/list/all');
      const content = await result.json();
      setBreeds((prev) => {
        return Object.keys(content.message);
      });
    })();
  }, []);

  const listAsSpans = breeds.map((breed, index) => {
    return <span key={index} className="dog-list-name">{breed}</span>;
  });

  return <div>{listAsSpans}</div>;
}
