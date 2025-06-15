# Lesson Plan

## Part 1

### Adding Event Handlers (15 min)
* Passing event handlers as Props

```jsx
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const handleClick = () => alert('Button clicked!');
  return <Button onClick={handleClick} />;
}
```

* event handler naming conventions
```jsx 
function App() {
  const handleInputChange = (e) => {
    console.log('Input changed to:', e.target.value);
  };

  return <input onChange={handleInputChange} />;
}
```
📌 Convention: handle<EventName> or on<EventName>

### Managing Form Inputs (15 min)
* Adding form inputs
```jsx
function App() {
  const [name, setName] = React.useState('');

  return (
    <input 
      type="text" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Enter name"
    />
  );
}
```
* Submitting inputs
```jsx
function App() {
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
```
* Performing simple input validation
```jsx
function App() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email address');
    } else {
      setError('');
      alert(`Submitted email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
```

### Rendering multiple components (10 min)
* Rendering components using `map()`
```jsx
function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```
* `key` property
```jsx
const items = [{ name: 'Pen' }, { name: 'Pencil' }];

function App() {
  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## Part 2

### Introduction to Hooks (10 min)
* Rules of Hooks
```jsx
function App() {
  const [count, setCount] = React.useState(0); 

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
* Life cycles


* Effects for synchronization
```jsx
function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    setMessage('Component mounted!');
  }, []);

  return <p>{message}</p>;
}
```

### How to use `useEffect` (15 min)
* Usage of `useEffect`
```jsx
function App() {
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    setMessage('Component mounted!');
  }, []);

  return <p>{message}</p>;
}
```
* dependencies of effect (onMount)
```jsx
function App() {
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    console.log('Name changed:', name);
  }, [name]);

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```
* cleanup after effect
```jsx
function Timer() {
  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  return <p>Timer running... check console</p>;
}
```

### Connecting to APIs (10 min)
* Calling async APIs using effects
```jsx
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```
* Implementing initial page load with loading wheel
```jsx
function App() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```


### Introduction to Meal Sharing app (5 min)

# Exercises

## Part 1

### 1. Create a ClickCounter component (10 minutes)

1. Create a new component called `ClickCounter`.
2. Use the `useState` hook to manage a `count` state variable.
3. Implement an `onClick` event handler function that increments the `count`.
4. Render a button and display the current value of `count`.

### 2. Build a SimpleForm component (15 minutes)

1. Create a new component called `SimpleForm`.
2. Use the `useState` hook to manage the state of form inputs.
3. Create input fields for the form (e.g., name, email, message).
4. Implement a `handleSubmit` function to handle form submission.
5. Render the form inputs and a submit button.

### 3. Develop a TodoList component (20 minutes)

1. Create a new component called `TodoList`.
2. Use the `useState` hook to manage an array of todo items.
3. Implement a function to add a new todo item to the array.
4. Implement a function to remove a todo item from the array.
5. Render a list of todo items using the `.map` method, ensuring each item has a unique `key` prop.
6. Render an input field to add new todos and buttons/functionality to remove todos.

## Part 2

### 4. Create a Clock component (15 minutes)

1. Create a new component called `Clock`.
2. Use the `useState` hook to manage the current time.
3. Use the `useEffect` hook to set up an interval that updates the time every second.
4. Implement the cleanup function in `useEffect` to clear the interval when the component unmounts.
5. Render the current time in the component.

### 5. Build a DataFetcher component (15 minutes)

1. Create a new component called `DataFetcher`.
2. Use the `useState` hook to manage the data, loading, and error states.
3. Use the `useEffect` hook to fetch data from a public API when the component mounts.
4. Implement loading and error states in the component's JSX.
5. Render the fetched data when it's available.

### 6. Develop a WindowResizer component (15 minutes)

1. Create a new component called `WindowResizer`.
2. Use the `useState` hook to manage the window size.
3. Use the `useEffect` hook to set up an event listener for the `resize` event.
4. Update the window size state whenever the `resize` event is triggered.
5. Implement the cleanup function in `useEffect` to remove the event listener when the component unmounts.
6. Render the current window size in the component.