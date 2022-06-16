import propTypes from 'prop-types'

function Todo({ name, id, completed, handleCompleted }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg w-full textmode">
      <label
        htmlFor={id}
        className="flex items-center radio__container gap-x-3"
      >
        <input
          type="checkbox"
          name="todo"
          id={id}
          className="radio__input"
          checked={completed || false}
          onChange={() => handleCompleted(id)}
        />
        <span className="radio" />
        <h3 className={`${completed ? 'todo--completed p' : ''}`}>{name}</h3>
      </label>
    </div>
  )
}

Todo.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  handleCompleted: propTypes.func.isRequired,
}

export default Todo
