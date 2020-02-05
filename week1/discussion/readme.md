## Native js/jQuery vs React DOM manipulation

Look at the two examples of dom insertion. Notice the difference when inspecting the updated elements in the dev tools. React will only rerender elements that are different compared to the previous rendering.
It is using what is known as a "virtual dom" to avoid unnecessary rendering.

But...

Even though the performance is technically improved with Virtual Dom then

1. You rarely update more than a few elements at a time.
2. A difference in performance is only noticable when manipulating "many" elements.
3. If many elements are created/deleted/updated, then usually all of the elements inside a section are changed:
    * Example : A table with 25 rows or github list of 25 repositories. When clicking next at the bottom all the rows or items are updated ... and the performance will be the same with or without virtual dom.

Conclusion:
In practice it rarely matters what approach you take. Don't get obsessed with micro optimizations and comparisson of framework/library performance.

## State management and render logic

When creating apps we see repeating patterns. For instance we often set up a relationship between changing variables and rendering of the DOM.

We often repeat the following set of actions:

1. A : Reassign or mutate variable
2. B : Update dom with the new value(s)

If these two operations always go together then it follows that we can create an abstraction called C which performs A and B

C : A -> B (if A is true then B)

But we don't want to update the DOM without A so instead we should go futher and say

C : A <-> B (only do B if A)

Look at the function called State in state-management. This returns an object and closes over a state object. By watching for state changes we can create a persistent binding to a render function.