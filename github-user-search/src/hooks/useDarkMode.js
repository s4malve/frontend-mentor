import { useEffect, useState } from 'react'

export default () => {
  // Obtaing the current theme from the browser. By default, it's 'dark'.
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme')

      if (typeof storedPrefs === 'string') return storedPrefs

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)')

      if (userMedia.matches) return 'dark'
    }

    return 'dark'
  }

  const [darkMode, setDarkMode] = useState(getInitialTheme)

  const setRawDarkMode = (theme) => {
    const root = window.document.documentElement,
      isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  useEffect(() => {
    setRawDarkMode(darkMode)
  }, [darkMode])

  return [darkMode, setDarkMode]
}
