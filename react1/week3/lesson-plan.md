# Lesson Plan

## Part 1

### Adding Event Handlers (15 min)
* Passing event handlers as Props
* event handler naming conventions

### Managing Form Inputs (15 min)
* Adding form inputs
* Submitting inputs
* Performing simple input validation

### Rendering multiple components (10 min)
* Rendering components using `map()`
* `key` property


## Part 2

### Introduction to Hooks (15 min)
* Rules of Hooks
* Life cycles
* Effects for synchronization

### How to use `useEffect` (15 min)
* Usage of `useEffect`
* dependencies of effect (onMount)
* cleanup after effect

### Connecting to APIs (10 min)
* Calling async APIs using effects
* Implementing initial page load with loading wheel




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