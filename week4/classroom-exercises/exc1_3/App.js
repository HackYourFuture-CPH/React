import React, {createContext, useState} from 'react';
import Parent from "./components/Parent.js"

const NamesContext = createContext({firstname : "firstname", lastname : "lastname"});

function App() {

  return (
    <>
     <NamesContext.Provider value={{firstname : "John", lastname : "Doe"}}>
        <Parent group={"A"} />
     </NamesContext.Provider>
    <Parent group={"B"}/>
    </>
  );
}

export {NamesContext}
export default App;
