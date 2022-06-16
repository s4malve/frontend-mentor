import propTypes from 'prop-types'
import { useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Todo from '../../Todo'

import TodoContext from '../../../context/Todo/TodoContext'

const RenderTodo = ({ todos }) => {
  const { handleComplete, handleDnd } = useContext(TodoContext)

  if (todos.length === 0) return <h3 className="py-4 p">Nothing here</h3>
  if (!todos) return null

  return (
    <DragDropContext
      onDragEnd={(param) => {
        const srcI = param.source.index,
          destI = param.destination.index
        handleDnd({ srcI, destI })
      }}
    >
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-full"
          >
            {todos.map(({ name, id, completed }, index) => (
              <Draggable key={id} draggableId={`draggable-${id}`} index={index}>
                {(provided, snapshot) => (
                  <li
                    className={`w-full ${
                      snapshot.isDragging
                        ? 'shadow shadow-stone-500 dark:shadow-stone-900 rounded-lg'
                        : ''
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo
                      id={id}
                      name={name}
                      completed={completed}
                      handleCompleted={handleComplete}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

RenderTodo.propTypes = {
  todos: propTypes.array.isRequired,
}

export default RenderTodo
