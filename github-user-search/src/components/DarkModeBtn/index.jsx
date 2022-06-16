import { memo } from 'react'

import Sun from '../../components/icons/Sun'
import Moon from '../../components/icons/Moon'

import useDarkMode from '../../hooks/useDarkMode'

const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  const handleDarkMode = () =>
    setDarkMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <button
      className="tracking-widest font-semibold flex items-center gap-x-2"
      onClick={handleDarkMode}
    >
      {darkMode === 'dark' ? (
        <>
          Dark
          <Moon />
        </>
      ) : (
        <>
          Light
          <Sun />
        </>
      )}
    </button>
  )
}

export default memo(DarkModeBtn)
