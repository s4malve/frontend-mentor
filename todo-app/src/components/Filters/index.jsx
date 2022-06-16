import { useContext, useState } from 'react'
import TodoContext from '../../context/Todo/TodoContext'

export default function Filters({ className = '' }) {
  const { filterActive, handleFilter } = useContext(TodoContext)
  const buttons = [{ name: 'all' }, { name: 'active' }, { name: 'completed' }]

  return (
    <ul className={`flex items-center gap-x-2 ${className}`}>
      {buttons.map(({ name }) => (
        <li key={name}>
          <button
            className={`btn--second ${name === filterActive ? 'active' : ''}`}
            onClick={() => handleFilter(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
