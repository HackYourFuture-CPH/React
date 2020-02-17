
import React, {createContext, useContext, useState} from 'react';
import "./styles/index.css";

const AnswerContext = createContext();
const GroupContext = createContext();

export default function Parent (props) {

    const [answer, setAnswer] = useState(true);

    return (
        <div className="thick-border">
            <h2>Parent {props.group}</h2>
            <h3>answer is : {answer.toString()}</h3>
            <AnswerContext.Provider value={{answer, setAnswer}}>
                <GroupContext.Provider value={props.group}>
                    <Child group={props.group}/>
                </GroupContext.Provider>
            </AnswerContext.Provider>
        </div>
    )
}

function Child () {

    return (
        <div className="thick-border">
            <h2>Child</h2>
            <GrandChild/>
        </div>     
    )
}

function GrandChild () {

    const answer = useContext(AnswerContext);
    const group = useContext(GroupContext);

    return (
        <div className="thick-border">
            <h2>GrandChild {group}</h2>
            <button onClick={() => answer.setAnswer(prev => !prev)}>Toggle answer</button>
        </div>
    )
}
