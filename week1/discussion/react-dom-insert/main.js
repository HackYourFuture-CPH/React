import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// babel-polyfill is used to enable async/await
import "babel-polyfill";

function App () {

    const [numberState, setNumberState] = useState(Math.random());

    return (
        <>
            <button onClick={() => setNumberState(Math.random()) }>Click me</button>
            <h1>{numberState}</h1>
            <ul>
                <li>elem</li>
                <li>elem</li>
                <li>elem</li>
                <li>elem</li>
                <li>elem</li>
                <li>
                    {numberState}
                    <ul>
                        <li>elem</li>
                        <li>elem</li>
                    </ul>
                </li>
                <li>elem</li>
                <li>elem</li>
                <li>elem</li>
                <li>elem</li>
            </ul>
        </>
    );
}


ReactDOM.render(
    <App/>, 
    document.getElementById("root")
);
