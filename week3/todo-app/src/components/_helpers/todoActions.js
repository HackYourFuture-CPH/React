export default function todoActions(setTodos) {

    return {
      toggle (id) {
        setTodos(todos => {
          return todos.map(todo => {
            const todoCopy = {...todo}
            if (todo.id === id) {
              todoCopy.completed = !todoCopy.completed
            }
            return todoCopy;
          })
        })
      },
      delete(id) {
        setTodos(todos => {
          return todos.filter(todo => {
            return todo.id !== id
          })
        })
      },
      add() {
        setTodos(todos => {
          return [...todos, {
            id : todos[todos.length -1]?.id + 1 || 1,
            title : "Random text",
            completed : false
          }]
        })
      }
    }
  }