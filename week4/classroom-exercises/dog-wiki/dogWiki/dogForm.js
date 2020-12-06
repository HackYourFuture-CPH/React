import React, { useState, useEffect } from 'react';
import './dogWiki.css'

export function DogForm({ setBreedName, setImageIsLoaded }) {
  const [breed, setBreed] = useState('');

  return (
    <div className="input-field">
      <input
        type='text'
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button onClick={() => {
          setBreedName(breed);
          setImageIsLoaded(false);
        }
      }>Submit</button>
    </div>
  );
}
