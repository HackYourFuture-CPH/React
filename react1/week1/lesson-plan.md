
> [!TIP]
> This is a suggested lesson plan for this class. As long as you cover the below topics, feel free to use your own examples and exercises, or organize the lesson in the way you see fit.

# Lesson Plan
## Part 1

### Why React and Next.js? (10 min)
* Limitations of Javascript
* Purpose of React
* Purpose of Next.js

### Thinking in Components (10 min)
* What are components?
* Breaking down UI into reusable components
* Hierarchy and composition of components

### Creating and running a Next.js app (10 min)
* Creating a new app using `npx create-next-app@latest`
* folder structure
* Running the app using `npm run dev`

### Basic Routing (10 minutes)
* Explanation of routes
* Creating subfolders in `app` directory with `page.jsx` file.
* Create a component that defines a page

## Part 2


==========

<center>This text will be centered</center>

==========

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

### 1. Set up a new Next.js project (5 minutes)
- Create a new app using `create-next-app` following [Setting up a new Next.js app](#setting-up-a-new-nextjs-project).
- Start the web app

### 2. Writing static components (10 minutes)

- Create a functional component called `Greeting` that returns an `h1` element with the text "Hello, React!".
- Create a functional component called `Card` that returns a `div` element with a nested `h2` element and a `p` element. The `h2` should display the text "Card Title", and the `p` should display the text "This is a card component".

### 3. Nesting components (10 minutes)

Create a functional component called `Cards` that renders two instances of the `Card` components from the previous exercise

### 4. Executing JS inside JSX (10 minutes)

Create a functional component called `Person` containing two constants `name` and `age`. The component should display the text: `{name} is an adult` if the age is 18 or higher or `{name} is a minor` if the age is less than 18.

## Part 2

### 5. Setting properties such as className and value (15 minutes)

- Create a functional component called `Button` that renders a `button` element with a `className` prop set to `btn btn-primary`.
- Create a functional component called `DangerButton` that renders a `button` element with a dangerous text and a `className` prop set to `btn btn-primary`.
- Create a functional component called `TextInput` that renders a text input field with a placeholder value `Type something here`.
- Create a functional component called `ProfileImage` that renders an image of a person.
- Add all of the above components to your app

### 6. Create sub pages (5 minutes)
- Create a subpage `/why-us` with a list of 3 reasons your site is worth visiting
- Create two subpages `/products/{product name}` for two fictional products your site contains. Add a simple header with the product name on both pages.

### 7. Add basic styling (5 minutes)

- Create a global CSS file that changes the color of all buttons to blue
- Add component styles for the `DangerButton` which makes it large and red


### (Bonus) Create a simple component structure
- Design a basic layout with header, main content, and footer
- Create separate components for each section









# Help

### Setting up a new Next.js project
To create a new Next.js project, you can use the `create-next-app` command provided by [the React.js team](https://react.dev/learn/start-a-new-react-project):

```bash
npx create-next-app@latest
```

You will presented with a few options for the project you are generating. For this module we will use the following options:
| Option    | Value  |
| -------- | ------- |
| Project name  | Name of your project |
| Use TypeScript  | No  |
| Use ESLint      | Yes |
| Use Tailwind    | No  |
| Use `src/` directory  | No |
| Use App Router  | Yes |
| Customize import alias    | No |

This will set up a new Next.js project with the necessary dependencies and a basic file structure.


> [!NOTE]
> Understanding all the options is out of the scope of this module, but if you are interested you can read more about it here:
> 
> - *[TypeScript](https://www.typescriptlang.org/)* is a superset of Javascript and introduces type checking which means it checks if the specified types match before running the code, not while running the code. It helps identifying errors early on.
> - *[ESLint](https://eslint.org/)* is an a tool which analyzes your code to ensure it follows good coding conventions. This helps keep the code clean and maintainable.
> - *[Tailwind CSS](https://tailwindcss.com/)* is a CSS framework which comes with a lot of utility classes to quickly add CSS styling to your components. It enables you to add styling without having to add most of the common CSS classes.
> - Using a `src/` directory is a common pattern to separate your source code from your configuration of the app. It can help you get a better overview of the project as it grows, but this option ultimately comes down to personal preference and won't affect your app.
> - *[App Router](https://www.freecodecamp.org/news/routing-in-nextjs/)* enables us to easily navigate between pages found in the `/app/pages/` folder. It is a build-in feature of Next.js and will solve most of your needs for page navigation.

### Running the development server
First make sure to navigate to your project folder in the terminal
```bash
cd my-app # replace 'my-app' with the name of your app
```

To start the Next.js development server, run the following command:
```bash
npm run dev
```

### Next.js project structure overview
A typical Next.js project structure looks like this:

```
my-app/
├── node_modules/
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   ├── globals.css
│   ├── favicon.ico
│   └── ...
├── components/
├── public/
├── .gitignore
├── next.config.js
├── jsconfig.json
├── package.json
└── package-lock.json
```

- `app/` directory contains the React components that represent different pages in your application.
- `components/` directory contains the React components that represent all the custom components built by you.
- `public/` directory is where you can store static assets like images, documents, etc.
- `next.config.js` is a configuration file for customizing Next.js behavior.