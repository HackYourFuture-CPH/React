import React, { useState, useEffect } from 'react';
import { DogForm } from './dogForm';
import { DogList } from './dogList';
import { BreedImage } from './breedImage'
import './dogWiki.css'

export function DogWiki() {
  const [breedName, setBreedName] = useState('');
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  return (
    <div className="container">
        <DogForm setBreedName={setBreedName} setImageIsLoaded={setImageIsLoaded}></DogForm>
        <DogList></DogList>
        <BreedImage breedName={breedName} imageIsLoaded={imageIsLoaded} setImageIsLoaded={setImageIsLoaded}></BreedImage>  
    </div>
  );
}
