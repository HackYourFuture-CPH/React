# Setting up a new Next.js project
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

## Running the development server
First make sure to navigate to your project folder in the terminal
```bash
cd my-app # replace 'my-app' with the name of your app
```

To start the Next.js development server, run the following command:
```bash
npm run dev
```

## Next.js project structure overview
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