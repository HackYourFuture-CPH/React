# Lesson Plan Week 4 - Managing state

- Recap exercises
- Context Simple/Advanced
  - createContext
  - Provider
  - useContext
- React.memo
- Introduction to state management libraries
  - Redux

## Simple Context example
```js

// Parent.js

  import React, {createContext, useContext, useState} from 'react';
  import "./context.css"; // context.css has a thick-border class

  const AnswerContext = createContext();

  export default function Parent () {

      const [answer, setAnswer] = useState(true);

      return (
          <div className="thick-border">
              <h2>Parent</h2>
              <h3>answer is : {answer.toString()}</h3>
              <AnswerContext.Provider value={{answer, setAnswer}}>
                  <Child/>
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

      return (
          <div className="thick-border">
              <h2>GrandChild</h2>
              <button onClick={() => answer.setAnswer(prev => !prev)}>Toggle answer</button>
          </div>
      )
  }

```
### Exercise with Simple Context example - Explain

- How are props passed down using the context api?
- What is the benefit?
- How are nested children (eg. grandchild) able to cause changes in the parent component?

## Recap Exercise with useState:

Cat exercise : Cat names 
 1. Create three components with this structure:

 - Main (parent component)
  - CatForm (child component)
  - CatList (child component)

 2. In the CatForm you have a single input field to enter a cat name.
 3. The Main component contains the list of cats entered.
 4. The CatList displays the list

## Recap exercise with useEffect, data fetching and useState

Dog exercise: Dog wiki
 1. Create a component with a useEffect Hook that calls an api to get a list of dog breeds:
  - https://dog.ceo/dog-api/documentation/
 2. Create an input field where the user can enter a name of a breed on the list and have a random image shown
 - https://dog.ceo/dog-api/documentation/breed


## Advanced **Unfinished** Context example
```js
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

### Exercises with Advanced **unfinished** Context example
1. Edit the above example. 
- Child component should NOT receive any props. 
- Instead the group name be passed directly from Parent to GrandChild. 
- Use createContext and useContext to accomplish this.
2. Replace the value being passed with an object instead of a boolean value. 
- The object should have a firstname and a lastname.
3. Remove the button from the GrandChild.
- Set a default object to create context with firstname and lastname. 
- Parent group A should use your own name and Parent group B should only use the default.

## EXTRA (if you are done with the context exercises): React.memo for performance

[React.memo](https://reactjs.org/docs/react-api.htm)

"If your function component renders the same result given the same props, you can wrap it in a call to React.memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result"

```js
  function MyComponent(props) {
    /* render using props */
  }
  function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
  export default React.memo(MyComponent, areEqual);

```

### Exercises with React.memo

- Add memoization to your todo app. Each Todo component should only render when its changed.

## EXTRA EXTRA:

### Get started with Redux and React Hooks.

- Follow this guide to get started with redux:

https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd




