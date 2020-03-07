## Links to week 1 videos

https://1drv.ms/u/s!AoI-8hQGtXUmnEsA_Wxgw9USNswx?e=Qpk6SR

## Links to week 2 videos

https://1drv.ms/u/s!AoI-8hQGtXUmnGxiTAfTGuEzk0B8?e=kep3TU

## Links to week 3 videos

https://1drv.ms/u/s!AoI-8hQGtXUmnHRcQriQQW7cfytC?e=qifpPM

## Links to week 4 videos:

https://1drv.ms/u/s!AoI-8hQGtXUmnQXQktxp_r344ZUl?e=6A2YSl

- In the the last video we talked about using the React.memo function to avoid calling each component and render on each keystroke. Render means calling some render logic, but doesn't necessarily mean it's updating the dom since it is using the "Virtual DOM" we talked about in week 1.

## Links to week 5 videos:

https://1drv.ms/u/s!AoI-8hQGtXUmnH-4Q-2SlhWOhf66?e=p83dqY

## Youtube React Hooks tutorial:

https://www.youtube.com/watch?v=cF2lQ_gZeA8&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=1

## The stale closure issue

https://dmitripavlutin.com/react-hooks-stale-closures/

## Complete guide to useEffect

https://overreacted.io/a-complete-guide-to-useeffect/

## Getting started with Redux with Hooks

https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd

https://thoughtbot.com/blog/using-redux-with-react-hooks

## React.memo and render performance:

https://stackoverflow.com/questions/55787701/react-efficiently-update-object-in-array-with-usestate-hook

## Firebase authentication:

- [Google oAuth in React](https://medium.com/firebase-developers/how-to-setup-firebase-authentication-with-react-in-5-minutes-maybe-10-bb8bb53e8834)
- [Firebase front- and backend](https://dev.to/emeka/securing-your-express-node-js-api-with-firebase-auth-4b5f)

#### Firebase official docs:

 - https://firebase.google.com/docs/auth ( under sections : Web and Admin )

#### Google oAuth signin buttons :

- [Google oAuth buttons design](https://developers.google.com/identity/branding-guidelines)

#### Firebase front- and backend with react and router video

- [Firebase Video](https://1drv.ms/v/s!AoI-8hQGtXUmnH6BnMzKNhd5uNci?e=ppJwdQ)
- [Firebase Video 2](https://1drv.ms/u/s!AoI-8hQGtXUmnQvYxg5Tq_QY2bu5?e=eaQqsg)

Notes to video 2:
I had apparently made a local edit to the app.js file in the backend file. But the way routing works is that if I call any other route than /auth, it will just send the index.html file from the server and then react router will do the rest:

app.get(['/', '*'], function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

Remember this is what happens in production when the app is deployed after the build version of react is copied over into the backend subfolder using docker
I also accidentally said that AJAX is Asynchronous Json and XML.
Its actually Asynchronous Javascript and XML.

#### Article on JWT Tokens as used in Firebase authentication

[A guide for adding JWT token-based authentication to your single page Node.js applications](https://medium.com/dev-bits/a-guide-for-adding-jwt-token-based-authentication-to-your-single-page-nodejs-applications-c403f7cf04f4)

## Deploy with github actions and docker:
[Deploying to Heroku from GitHub Actions](https://dev.to/heroku/deploying-to-heroku-from-github-actions-29ej)

