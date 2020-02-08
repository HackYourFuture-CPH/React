# Lesson Plan - Advanced react

## Forms and props.children
Forms works out of the box exactly like plain html.

but if we need to handle form submission in javascript and keep track of what data the user enters in the form, then we use [controlled inputs](#controlled-inputs)

- Controlled Inputs
  - Docs [here](https://reactjs.org/docs/forms.html#controlled-components)
  - Uncontrolled inputs are almost never useful to us
  - For controlled inputs, we must provide _both_:
    - The value
    - The onChange event handler
  - React controls the state of the input, not the browser
  - The state is the 'single source of truth'
- Using data fetching
  - Setting up fetching in useEffect
  - Talk about loading states
- Children
  - Make a simple example of using `props.children`. Fx the fancyborder component used in [this example](https://reactjs.org/docs/composition-vs-inheritance.html#containment)

## Exercise 1: Generic Modal using props.children

- Create a generic modal component. It's job is to simply center its cildren on the page
- Make a call to the yes/no api (https://yesno.wtf/api) and display one of two componenets as the child of the modal component:
- 1. SubscriptionForm
- 2. SubscriptionMessage
- While the request is pending, the modal child should be a Loader component which just displays a loading message

Think about how to thoroughly separate and isolate the logic within each component. The modal children components should not be aware they are placed in a modal. 
Likewise, the modal component should not be aware of the differences between its child components.

## Exercise 2: Time registration

Make a site that manages time registration for employees.

#### User stories

##### Submit shift
As a employee i would like to submit my shift. The shift should include
- Employee name
- Start time
- End time

##### Shift overview
As an employeer i would like to have an overview of the employee shifts. They should be displayed in a list, showing 
- Employee name
- Start time
- End time
- Total number of hours
- Price for shift

##### Total price
As an employeer i would like to have an overview of the total logged time and the total price for that time.

##### Filter submitted shifts
As an employeer i would like to filter the shifts based on name.

##### Submit shift
The submit shift form should come up as a modal. The simplest way to do this is setting the modal to fixed position. 

Use controlled inputs to get the shift information.

Pressing save will add the shift to the shifts overview.

What input type should `start` and `end` be?

##### Shift overview
To fetch the default shifts, use this api: https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw

When is it we should do fetching in a react component?

Remember loading state when fetching the default shifts.

The shift components should be wrapped in a border component that adds a border to the component being wrapped. Do this using `props.children`.

##### Filter submitted shifts
Do this again using controlled inputs.

#### Mockups

##### Submit shift
![Submit shift](assets/submit-shift.jpg)

##### Shifts overview
![Submit shift](assets/shifts-overview.jpg)
