
import React, {useContext} from 'react';
import "./styles/index.css";
import {NamesContext} from "../App.js";

export default function Parent (props) {

    const names = useContext(NamesContext)

    return (
        <div className="thick-border">
            <h2>Parent {props.group}</h2>
            <h3>lastname is {names.lastname}</h3>
            <Child group={props.group}/>
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

    return (
        <div className="thick-border">
            <h2>GrandChild {props.group}</h2>
        </div>
    )
}
