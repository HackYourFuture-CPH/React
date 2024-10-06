# Contexts & Routing

## Context 2.1 Lecture (40 minutes)

### a. Introduction to Context (5 minutes)

The React Context API is a way to pass data through the component tree without having to pass props down manually at every level. It helps to solve the problem of prop drilling, where props are passed from a top-level component to a deeply nested component.

**When to use Context?**
- When you have data that needs to be accessed by many components at different nested levels.
- When you want to share global state across the application.

**Benefits of Context over prop drilling:**
- Avoids the need to pass props through multiple levels of components.
- Makes the code more maintainable and easier to refactor.
- Promotes code reuse by allowing components to subscribe to the same context.

### b. Creating a Context (10 minutes)

Creating a context in React involves two steps:

1. **Creating the context object:**

```jsx
import { createContext } from 'react';

const MyContext = createContext();
```

2. **Setting up the provider component:**

```jsx
import { createContext } from 'react';

const MyContext = createContext();

const MyProvider = ({ children, value }) => {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };
```

The `Provider` component is used to wrap the components that need access to the context value. It accepts a `value` prop, which is the data that will be shared across the component tree.

### c. Consuming Context (10 minutes)

To consume the context value in a component, you can use the `useContext` hook:

```jsx
import { useContext } from 'react';
import { MyContext } from './MyContext';

const MyComponent = () => {
  const contextValue = useContext(MyContext);

  // Use the contextValue in your component
  return <div>{contextValue}</div>;
};
```

The `useContext` hook subscribes the component to context changes. When the context value changes, the component will re-render with the new value.

To update the context value, you need to update the value prop of the `Provider` component.

### d. Multiple Contexts (10 minutes)

You can create multiple contexts in your application to manage different types of state. This helps to structure your application state and make it more maintainable.

```jsx
// ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext();

// UserContext.js
import { createContext } from 'react';

const UserContext = createContext();
```

You can then use these contexts in different parts of your application:

```jsx
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        {/* Components that need access to theme and user context */}
      </UserProvider>
    </ThemeProvider>
  );
};
```

### e. Context Performance Considerations (5 minutes)

While the Context API is a powerful tool, it's important to be mindful of its performance implications.

**When context causes re-renders:**
When a context value changes, all components subscribed to that context will re-render, even if they don't use the updated value. This can lead to unnecessary re-renders and performance issues.

**Using memoization and reference equality:**
To avoid unnecessary re-renders, you can use memoization techniques like `React.memo` or `useMemo` to memoize components or values that don't need to re-render or recalculate when the context value changes.

**Code splitting and lazy loading contexts:**
If you have a large application with multiple contexts, consider code splitting and lazy loading contexts to improve the initial load time and reduce the bundle size.

## Context 2.1 Exercises (30 minutes)

### a. Create a ThemeContext (10 minutes)

1. Create a new file called `ThemeContext.js`.
2. Import `createContext` from 'react'.
3. Create a new context using `createContext()` and export it.
4. Create a `ThemeProvider` component that wraps the `Provider` component from the context you created.
5. Export the `ThemeProvider` component.

### b. Consume ThemeContext (10 minutes)

1. Import the `ThemeContext` and `useContext` hook from 'react'.
2. In a component where you want to access the theme values, use the `useContext` hook to get the context value.
3. Apply the theme styles based on the context value.

### c. Update ThemeContext (10 minutes)

1. In the `ThemeProvider` component, define a state variable to store the current theme (e.g., 'light' or 'dark').
2. Create a function to toggle the theme.
3. Pass the theme value and the toggle function as the value prop to the `Provider` component.
4. In a component where you want to update the theme, import the `useContext` hook and the `ThemeContext`.
5. Use the `useContext` hook to get the theme value and the toggle function.
6. Implement a button or switch that calls the toggle function when clicked or toggled.
