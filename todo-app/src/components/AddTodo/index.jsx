import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import TodoContext from '../../context/Todo/TodoContext'

export default function AddTodo() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const { handleAdd } = useContext(TodoContext)

  const handleData = ({ todo }) => {
    if (isSubmitSuccessful) {
      handleAdd(todo)
      resetField('todo')
    }
  }

  return (
    <form
      className={`px-5 py-3 rounded-lg w-full bgmode border-2 shadowmode shadow-md mb-3 textmode   ${
        errors.todo
          ? 'border-red-500 animate-shake focus-within:border-red-500'
          : 'bordermode'
      }`}
      onSubmit={handleSubmit(handleData)}
    >
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(handleData)()
          }
        }}
        placeholder="Create a new Todo..."
        {...register('todo', { required: true })}
      />
    </form>
  )
}
