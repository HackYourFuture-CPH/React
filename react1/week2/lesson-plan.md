


# Lesson Plan

## Part 1

### Introduction to Props (10 min)
* What are props and why are they used?
* Props as a way to make components flexible and reusable
* Why props should never be changed within components (one-way data flow)

### Passing and reading Props (20 minutes)
* How to pass props to components
* reading props using `props.x` syntax
* reading props using destructing syntax
* forwarding props using spread syntax

### Using children Props (10 minutes)
* What are children props
* Creating wrapper components

### Conditionally rendering (10 minutes)
* Conditional rendering using if/else
* Conditional rendering using ternary operator `(<condition> ? <then> : <else>)` or `<condition> && <then>`






## Part 2

### Introduction to State (5 min)
* What is state and when to use it
* Differences between props and state

### useState Hook Syntax (10 minutes)
* Introduction to hooks
* How to declare and use state with useState

### Updating state (10 minutes)
* Updating State arrays
* Updating State objects

### React rendering triggers (5 minutes)
* What causes React to re-render components
* Using functional updates for consecutive state changes

### Dynamically rendering content (10 minutes)
* Conditional rendering using if/else
* Conditional rendering using ternary operator `(<condition> ? <then> : <else>)` or `<condition> && <then>`
* Rendering multiple items using `.map()`

### Sharing State between components (5 min)
* Lifting state up to parent















### Creating and running a Next.js app (10 min)
* Creating a new app using `npx create-next-app@latest`
* folder structure
* Running the app using `npm run dev`

### Basic Routing (10 minutes)
* Explanation of routes
* Creating subfolders in `app` directory with `page.jsx` file.
* Create a component that defines a page

### Writing your first static component (20 min)
* Creating a Functional Component
* Returning JSX
   * Single Root Element Requirement
   * Fragments
* Using components inside components

### Use {} to execute JS inside JSX (10 minutes)
* Embedding Expressions in JSX
* Conditional Rendering

### Setting attributes (5 min)
* HTML attributes
* className

### Importing / exporting .jsx (5 min)
* defauls exports and named exports

### Importing .css (5 minutes)
* Global styles vs. component-specific styles
* CSS modules in Next.js

# Exercises

## Part 1

### 1. Create a reusable Button component (10 minutes)

1. Create a new component called `Button`.
2. Accept `text` and `onClick` as props.
3. Render a button element with the `text` prop as its content.
4. Attach the `onClick` prop to the button's `onClick` event handler.

### 2. Create a Card component (15 minutes)

1. Create a new component called `Card`.
2. Accept `title`, `description`, and `imageUrl` as props.
3. Use destructuring to extract the props.
4. Render a card-like structure with the provided `title`, `description`, and `imageUrl`.

### 3. Create a Layout component (10 minutes)

1. Create a new component called `Layout`.
2. Accept `children` as a prop.
3. Render a layout structure (e.g., header, main content area, footer) with the `children` prop rendered inside the main content area.

### 4. Implement conditional rendering (10 minutes)

1. Create a new component called `ToggleContent`.
2. Accept a `show` prop as a boolean value.
3. Accept `content` as a prop, which can be a string or a React element.
4. Render the `content` prop only if the `show` prop is true, otherwise render a message or nothing.

## Part 2

### 5. Create a Counter component (10 minutes)

1. Create a new component called `Counter`.
2. Use the `useState` hook to manage a count state variable.
3. Implement functions to increment and decrement the count.
4. Render the current count value and buttons to call the increment and decrement functions.

### 6. Build a Todo List component (15 minutes)

1. Create a new component called `TodoList`.
2. Use the `useState` hook to manage an array of todo items.
3. Implement a function to add a new todo item to the array.
4. Implement a function to remove a todo item from the array.
5. Render the list of todo items, an input field to add new todos, and buttons to remove todos.

### 7. Develop a Form component (10 minutes)

1. Create a new component called `Form`.
2. Use the `useState` hook to manage the state of form input fields.
3. Implement a function to handle form submission.
4. Render input fields for each form field and a submit button.

### 8. Create a ParentChild component set (10 minutes)

1. Create a new component called `Parent`.
2. Create another component called `Child`.
3. In the `Parent` component, use the `useState` hook to manage a state variable.
4. Implement a function to update the state variable.
5. Render the `Child` component and pass the state variable and the update function as props.
6. In the `Child` component, render the data received from the parent and a button to call the update function.