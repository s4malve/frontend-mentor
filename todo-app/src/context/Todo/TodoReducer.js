export default function TodoReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: payload,
      }

    case 'HANDLE_COMPLETE': {
      const newTodos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo
      )
      window.localStorage.setItem('todos', JSON.stringify(newTodos))
      return {
        ...state,
        todos: newTodos,
      }
    }

    case 'HANDLE_ADD': {
      const newTodos = [
        ...state.todos,
        {
          id: new Date().toISOString(),
          name: payload,
          completed: false,
        },
      ]
      window.localStorage.setItem('todos', JSON.stringify(newTodos))
      return {
        ...state,
        todos: newTodos,
      }
    }

    case 'HANDLE_FILTER':
      return {
        ...state,
        filterActive: payload,
      }

    case 'HANDLE_DND': {
      const { srcI, destI } = payload
      const { todos } = state
      const newTodos = [...todos]
      newTodos.splice(destI, 0, newTodos.splice(srcI, 1)[0])
      window.localStorage.setItem('todos', JSON.stringify(newTodos))

      return {
        ...state,
        todos: newTodos,
      }
    }

    case 'HANDLE_MODAL':
      return {
        ...state,
        modalIsOpen: payload,
      }

    case 'CLEAR_COMPLETED': {
      const newTodos = state.todos.filter(({ completed }) => !completed)

      window.localStorage.setItem('todos', JSON.stringify(newTodos))
      return {
        ...state,
        todos: newTodos,
      }
    }

    default:
      return state
  }
}
