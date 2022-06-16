import { useState } from 'react'

export default () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('color-theme') === 'dark'
  )

  const handleClick = () => {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
      setDarkMode(false)
    }
  }

  return (
    <button
      className={`h-6 p-1 rounded-full w-10 ${
        darkMode
          ? 'bg-gradient-to-r from-[#378fe6] to-[#3eda82]'
          : 'bg-stone-400'
      }`}
      onClick={handleClick}
    >
      <div
        className={`h-full relative rounded-full transition-transform translate-x-full w-4 ${
          darkMode
            ? 'translate-x-0 bg-slate-900'
            : 'translate-x-full bg-slate-100'
        }`}
      />
    </button>
  )
}
