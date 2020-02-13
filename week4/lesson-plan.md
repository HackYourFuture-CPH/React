# Lesson Plan Week 4 - Managing state

- Context
  - Consumer
  - Provider
- Render props
- Introduction to state management libraries
  - Redux

## Context example
```
  // App.js

  import React from 'react';
  import Parent from "./components/Parent.js"

  function App() {
    return (
      <>
      <Parent group={"A"}/>
      <Parent group={"B"}/>
      </>
    );
  }

// Parent.js

  import React, {createContext, useContext, useState} from 'react';
  import "./styles/index.css";

  const AnswerContext = createContext();

  export default function Parent (props) {

      const [answer, setAnswer] = useState(true);

      return (
          <div className="thick-border">
              <h2>Parent {props.group}</h2>
              <h3>answer is : {answer.toString()}</h3>
              <AnswerContext.Provider value={{answer, setAnswer}}>
                  <Child group={props.group}/>
              </AnswerContext.Provider>
          </div>
      )
  }

  function Child (props) {

      return (
          <div className="thick-border">
              <h2>Child {props.group}</h2>
              <GrandChild group={props.group}/>
          </div>     
      )
  }

  function GrandChild (props) {

      const answer = useContext(AnswerContext);

      return (
          <div className="thick-border">
              <h2>GrandChild {props.group}</h2>
              <button onClick={() => answer.setAnswer(prev => !prev)}>Toggle answer</button>
          </div>
      )
  }

```
### Exercises with Context - Explain

- How a props passed down using the context api?
- What is the benefit?
- How are nested (grandchild) able to cause changes in the parent component?

### Exercises with Context
1. Edit the above example. <Child/> component should NOT receive any props. Instead the group name be passed directly from Parent to GrandChild. Use createContext and useContext to accomplish this.
2. Replace the value being passed with an object instead of a boolean value. The object should have a firstname and a lastname.
3. Set a default object to create context with firstname and lastname. Parent group A should use your own name and Parent group B should only use the default.



