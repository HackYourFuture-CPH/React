
import React, {createContext, useContext, useState} from 'react';
import "./styles/index.css";

const NamesContext = createContext();

export default function Parent (props) {

    const [names, setNames] = useState({firstname : "fst", lastname : "lst"});

    return (
        <div className="thick-border">
            <h2>Parent {props.group}</h2>
            <h3>answer is : {names.lastname}</h3>
            <NamesContext.Provider value={{names, setNames}}>
                <Child group={props.group}/>
            </NamesContext.Provider>
        </div>
    )
}

function Child (props) {

    return (
        <div className="thick-border">
            <h2>Child {props.group}</h2>
            <GrandChild group={ props.group }/>
        </div>     
    )
}

function GrandChild (props) {

    const names = useContext(NamesContext);

    return (
        <div className="thick-border">
            <h2>GrandChild {props.group}</h2>
            <button onClick={
                () => 
                    names.setNames(prev => ({firstname : "newfst", lastname: "newlst"}))
                }>
                Set names
            </button>
        </div>
    )
}
