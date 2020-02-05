import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// babel-polyfill is used to enable async/await
import "babel-polyfill";
import "./app.css"

function App (prop) {

    const [state, setState] = useState(1);

    var counter = 0;
     useEffect(() => {

        const counterCallback = () => {
            console.log("dsdsds")
            counter++;
            document.querySelector("#box").innerText = "Value of counter is: " + counter;
        }

        document.querySelector("#box").addEventListener('click', counterCallback);

        return (() => {
            document.querySelector("#box").removeEventListener('click', counterCallback)
        })
     },[state]);

    return (
        <>
            <button onClick={() => setState(prev => prev +1)}>Change state</button>
            <h1>The value of counter is: {counter}</h1>
            <h1>This function has been called: {state} time(s)</h1>
        </>
    );
}


;(async () => {
    ReactDOM.render(
        <App/>, 
        document.getElementById("root")
    );
})();

