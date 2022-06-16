import { useCallback, useEffect, useReducer } from 'react'
import TodoContext from './TodoContext'
import TodoReducer from './TodoReducer'

export default function TodoState({ children }) {
  const initialState = {
    todos: [
      { id: '1', name: 'example todo', completed: false },
      { id: '2', name: 'another todo', completed: true },
      { id: '3', name: 'last example todo', completed: false },
    ],
    filterActive: 'all',
  }
  const [state, dispatch] = useReducer(TodoReducer, initialState)

  const handleComplete = (payload) =>
    dispatch({ type: 'HANDLE_COMPLETE', payload })

  const handleAdd = useCallback(
    (payload) => dispatch({ type: 'HANDLE_ADD', payload }),
    [state.todos]
  )

  const handleFilter = (payload) => dispatch({ type: 'HANDLE_FILTER', payload })

  const handleDnd = (payload) => dispatch({ type: 'HANDLE_DND', payload })

  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' })

  useEffect(() => {
    if (window.localStorage.getItem('todos')) {
      dispatch({
        type: 'SET_TODOS',
        payload: JSON.parse(localStorage.getItem('todos')),
      })
    } else {
      window.localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  }, [])

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        filterActive: state.filterActive,
        clearCompleted,
        handleComplete,
        handleFilter,
        handleAdd,
        handleDnd,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
