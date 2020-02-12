import React, {useState, useEffect} from 'react';
import Todo from "./Todo.js"
import todoActions from "./_helpers/todoActions.js"

function Todos() {
    const [ todos, setTodos ] = useState([]);
    const action = todoActions(setTodos);
  
    useEffect(() => {
      ;(async () => {
        const todosList = await fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json());
        setTodos(todosList.slice(0,10));
      })();
    },[]);
  
    const todosList = todos.map(todo => {
      return (
        <Todo 
          key={todo.id} 
          completed={todo.completed} 
          title={todo.title} 
          thisToggle={() => action.toggle(todo.id)}
          thisDelete={() => action.delete(todo.id)}
        />
      )
    })
  
    return (
      <>
        <button onClick={action.add}>Add todo</button>
        <ul>
          {todosList}
        </ul>
      </>
    )
  }
  

  

  export default Todos;
  