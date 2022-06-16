import { useState } from 'react'

import Sun from '../Icons/Sun'
import Moon from '../Icons/Moon'

export default function Header() {
  const [isDark, setIsDark] = useState(
    !document.documentElement.classList.contains('dark')
  )
  const handleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      setIsDark(false)
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }

  return (
    <div className="flex items-center justify-between w-full text--white">
      <h1 className="font-bold text-3xl tracking-[1rem] uppercase">todo</h1>
      <button type="button" onClick={handleTheme}>
        {isDark ? <Moon /> : <Sun />}
      </button>
    </div>
  )
}
