import React, { useState, useEffect } from 'react';
import './dogWiki.css'

export function BreedImage({breedName, imageIsLoaded, setImageIsLoaded}) {
  
  const [imageUrl, setImageUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
     setImageIsLoaded(true);
     if (!imageIsLoaded && breedName !== '') {
      (async () => {
        try {
          const result = await fetch(
            'https://dog.ceo/api/breed/' + breedName + '/images'
          );
          if (result.status !== 200) {
            throw new Error('Could not retrieve image')
          }
          const images = await result.json(); 
          setImageUrl(prev => images.message[
            Math.floor(Math.random() * images.message.length)
          ])
        } catch (error) {
          setErrorMessage(prev => error.message)
        }
      })();
     }
     
  });
  return (
    <div className="breed-image">
        <img src={imageUrl} alt='' />
        <div>{errorMessage}</div>
    </div>
  );
}
