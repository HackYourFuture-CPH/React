# Homework

### Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) out before you get into some git confusion!

This week the homework will result in 2 PRs: 1 in your homework repository and 1 in the Meal Sharing repository.


## GitHub users search

Your homework will be searching GitHub users based on what you type in the input. Use this API: `https://api.github.com/search/users?q=${query}`

Requirements:

- When the search is loading, you should show "loading..."
- When the search is failed, you should show "error fetching (reason why it failed)..."
- When the search result is empty (no users), you should show "No results..."
- All state should be managed using the context api!

![Homework preview](assets/homework-preview.gif)

Try the website here: https://ro6ne.csb.app/

## Meal sharing

Let's not forget to give some attention to the meal sharing frontend!  
You have built a `MealsList` last week.  
Now build the `Meal` component so that you can use it in the `MealsList` and render a nice card for each meal.  
Decide how the meal card should look like and style it.  
The component should accept a meal object as a prop and render all its relevant details.  
The `MealsList` should render all the meals in a grid. 

<br/>

## Hand in homework

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) to remember how to hand in the homework correctly!
