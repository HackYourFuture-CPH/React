# Lesson Plan - Building components
- Stateful logic - Having logic around state

- Create react app
  - Show students how to install create react app. https://github.com/facebook/create-react-app
  - Explain the general structure
  - How to run `npm run start`
  - Talk briefly about how the dist folder is generated

- Component tree
  - Transform a todolist sketch into components on white board. 
  - *Exercise:* transform another ui into components in pairs.
- stateful logic
  - Using destructuring in React
  - State vs. Props
      - Both props and state trigger a render update when they change
      - How to determine if data should be props or state?
        - Props are "configuration options" for components
        - State is completely optional
        - State increases complexity and reduces predictability
        - Use props unless you definitely need to use state
        - State is single-level only. Components can read and set their own state, but cannot read or set the state of their children
      - Later, we are going to be using a state-management tool
- Using state correctly
    - Do not modify state directly, always use setState
        - Give an example of how mutating state directly doesn’t work
    - State updates are merged (note that merging is shallow)
    - setState is an asynchronously-executed _request_ to change state
- List keys
  - Render list first without adding the key. See the error
  - Assignment of unique key to every item rendered in an array
  - Keys help React identify which items have changed, are added, or are removed
  - [Index should be avoided](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
  - [Code inspiration](#todolist-updating-state-with-list)
- Compponent life cycles
  - [Using the effect hook](https://reactjs.org/docs/hooks-effect.html)
  - Understand when useEffect is executed
  - understand how to"clean up" useEffect code
  - Understand when "clean up" is run

[Code inspiration](#counter)

## Code inspiration

### Fibonacci

```js
function FiboCounter () {
    
    const [counterState, setCounterState] = useState([1]);
  
    const increment = () => {
      setCounterState(prev => {
          const pl = prev.length;
          // the ?? means that it will use the right value if the left is "nullish" (undefined or null)
          return [ ...prev, prev[pl -1] + (prev[pl -2] ?? 0)];
      })
    };

    const logList = counterState
        .map((log, index) => <div key={index}>{log}</div>)

    return (
        <>
            <button onClick={increment}>{counterState.slice().pop()}</button>
            {logList}  
        </>
    );  
}

ReactDOM.render(<FiboCounter />, document.getElementById("root"));

```

## Exercise

Create another version of the fibonacci counter. This shows the first 10 fibbonacci when clicking a button instead of one by one. 
Recall what you know about state management. When calling the state change funtion, the component is automatically called again.

### Counter

First understand the code in this component:

```js
function WatchCount() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
       setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);
    });
  
    return (
      <div>
        {count}
      </div>
    );
  }

ReactDOM.render(
    <WatchCount/>, 
    document.getElementById("root")
);
```

Now extend it with the following features:
- Add a button that decrements the timer
- Add a button that resets the counter to 0

## Ekstra : 
- A button that pauses the counter
  - Clicking it should change the text so it says `start`. Clicking the button now should start the timer again and change the text to `pause`
  - Also, the counter should stop immediately. Hint : you need to return a clean up function from useEffect
- An input field that lets you set the speed of the counter. The speed should be reflected immediately on keypress and the counter should pause when entering invalid input.
