'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(
      "useTheme doit être utilisé à l'intérieur d'un ThemeProvider",
    )
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme state with 'light' as default
  const [theme, setTheme] = useState<Theme>('dark' || 'light')

  useEffect(() => {
    // Access localStorage in useEffect to ensure code runs on client side
    const storedTheme = localStorage.getItem('theme') as Theme | null
    console.log('storedTheme', storedTheme)
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
