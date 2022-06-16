import AddTodo from '../components/AddTodo'
import Header from '../components/Header'
import TodoList from '../components/TodoList'

import TodoState from '../context/Todo/TodoState'

export default function App() {
  return (
    <div className="bgmode">
      <TodoState>
        <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
          <header
            className={`h-full dark:bg-hero-mobile-dark md:dark:bg-hero-desktop-dark bg-hero-mobile-light md:bg-hero-desktop-light bg-no-repeat bg-cover`}
          >
            <div className="flex-col flex h-full items-center justify-center max-w-2xl mx-auto w-11/12 min-h-[232px] gap-y-8">
              <Header />
              <div className="relative w-full">
                <AddTodo />
                <TodoList />
              </div>
            </div>
          </header>
          <div className="grid h-full items-end justify-center">
            <footer className="pb-3">
              <h2 className="font-semibold text-lg textmode">
                Drag and drop to reorder your todos.
              </h2>
            </footer>
          </div>
        </div>
      </TodoState>
    </div>
  )
}
