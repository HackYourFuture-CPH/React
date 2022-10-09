import { useEffect, useState } from "react";

const API_URL = 'https://dog.ceo/api/breeds/image/random';

function App() {
  const [src, setSrc] = useState(null);

  async function fetchDog () {
    const response = await fetch(API_URL);
    const { message } = await response.json();
    setSrc(message);
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
      <button onClick={fetchDog}>Fetch</button>
      {src && <img src={src} alt="a dog" width={"100%"}/>}
    </>
  );
}

export default App;
