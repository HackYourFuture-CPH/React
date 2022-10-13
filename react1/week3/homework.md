# Homework

## Get git ready to work on homework

Using the `hyf-homework` repo. In the terminal run `git status`

If there are changes that have not been committed, figure out what to do with those changes

- Should they be committed to another branch?
- Should they be committed to `main`?
- Should they be discarded?

When you have figured out what to do with the changes and fixed those. Write `git status` again. If it says `nothing to commit, working tree clean`. Then you are ready to create the branch for this weeks homework.

### Creating the branch

Using the `hyf-homework` repo write this command

`git checkout main` - You are now on the `main` branch

`git checkout -b react-react1-week3`

This will create and checkout the branch so you are ready make commits to it

[This video](https://www.youtube.com/watch?v=XYlgh9hSWtw) can help. On slack use the #git-support channel to ask questions about git

## Outline

Now instead of using an array to load the default items, use the api found here: `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw` using `fetch`

Extend your todo list app with the ability to add new todo items with user inputted data and remove existing ones and a deadline for the todo item.

Create an add button, a text input and a deadline input. When the add button is clicked a new todo item is created with the given
description and deadline. Create also a remove button, which when clicked it should remove the todo item from the list.

> Challenge: figure out a way for users to enter the deadline date. This is a great opportunity to think like a community in a wider development community. Perhaps there are some React libraries out there that provide some kind of **date picker**? Also, look at [Luxon](https://moment.github.io/luxon/index.html) to see if it could be useful.

Create a component that wraps another component in a black border using [react children](https://medium.com/javascript-in-plain-english/how-to-use-props-children-in-react-7d6ab5836c9d)

Demo of how the homework should look

![todolist](assets/todolist.gif)

Here are the requirements for this weeks homework:

- Add a deadline to the todo item
- Create new item using description and deadline that the user inputs
- Possibility to update a todoitem
- Create proptypes for at least one of the components
- Create a border component that wraps a component in a black border

Worth considering:

- What if the description input is empty?
- What if the deadline input is empty?
- What if the deadline is before the current day?
- What if you edit an item with an empty description?

## Extra assignment

Make the exercises in [chat-app](https://github.com/HackYourFuture-CPH/React/tree/main/examples/chat-app)!

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
