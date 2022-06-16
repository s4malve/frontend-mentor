import { useContext } from 'react'

import Filters from '../Filters'
import RenderTodo from './RenderTodo'

import TodoContext from '../../context/Todo/TodoContext'

export default function TodoList() {
  const { todos, filterActive, clearCompleted } = useContext(TodoContext)
  const itemsLeft = todos && todos.filter((todo) => !todo.completed).length

  return (
    <div className="absolute flex-col flex left-0 overflow-y-auto right-0 top-full max-h-[340px] md:max-h-[460px]">
      <ul className="flex-col flex h-full items-center justify-center rounded-bl-none rounded-br-none card">
        {filterActive === 'all' && <RenderTodo todos={todos} />}
        {filterActive === 'active' && (
          <RenderTodo todos={todos.filter(({ completed }) => !completed)} />
        )}
        {filterActive === 'completed' && (
          <RenderTodo todos={todos.filter(({ completed }) => completed)} />
        )}
      </ul>
      <div className="border-t flex items-center justify-between p-4 rounded-tl-none rounded-tr-none card bordermode">
        <p className="p">{itemsLeft} items left</p>
        <Filters className="hidden md:flex" />
        <button className="btn--second" onClick={clearCompleted}>
          clear completed
        </button>
      </div>
      <Filters className="justify-center mt-3 p-3 card md:hidden" />
    </div>
  )
}
