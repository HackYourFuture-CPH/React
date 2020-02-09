import React from 'react';
import WatchCount from "./components/WatchCount.js"
import Todos from "./components/Todos.js"
import './App.css';

function App() {

  return (
    <>
      <h1>Todos</h1>
      <WatchCount/>
      <Todos></Todos>
    </>
  )
}

export default App;
