# Exercises

### 1. Set up a new Next.js project (5 minutes)
1. Create a new app using `create-next-app` following [Setting up a new Next.js app](#setting-up-a-new-nextjs-project).
1. Start the web app and open it on http://localhost:3000/
1. Clear out the existing CSS and JSX and make a basic page with a `h1` saying `Hello World`

### 2. Writing a static component (10 minutes)

1. Create a functional component called `AstronautTraining` that returns an ordered list with 3 or more trainings an astronaut should complete before they can go to outer space.
1. Add a header before the list with the text `Trainings`
1. Add a disabled button at the button of the list with the text `Send Astronaut to the moon`
1. Add a button `Complete training` to each list item. (the button shouldn't do anything)

### 3. Executing JS inside JSX (10 minutes)

1. Let's add some info about our astronaut. Add three constants in your list `name`, `age`, `isDog` (what would be a fitting type for each?). 
1. Change the header to include the name of the astronaut. i.e. `Billie's Trainings`.
1. Add a text under the header stating the age and whether he/she is a dog:
   * `Billie is a 6 year old dog`
   * `Sallie is a 21 year old human`
1. NASA doesn't allow minors in space. Enable the `Send Astronaut to the moon` button only if the astronaut is at least 18 years old human or 4 year old dog.

### 4. Nesting components (10 minutes)

- In the same file create a component called `CompleteTrainingButton` and use this component in your list.
- Move the ordered list into its own component too


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