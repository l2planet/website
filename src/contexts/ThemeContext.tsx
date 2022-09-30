import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { ChildrenProp } from '../types/globals'

interface ThemeContextState {
    /** Toggles the theme between `"dark"` & `"light"`. */
    toggleTheme(): void
    theme: 'dark' | 'light'
}

const ThemeContext = createContext({} as ThemeContextState)

/** Allows you to use `ThemeContext`. */
export const useTheme = () => useContext(ThemeContext)

/** All available themes. */
type Theme = 'dark' | 'light' | 'auto'

/** The provider component for `ThemeContext`. */
export const ThemeProvider = ({ children }: ChildrenProp) => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'auto')

    const _theme = useMemo(() => {
        return theme === 'auto'
            ? (() => {
                  if (typeof window !== 'undefined')
                      return window.matchMedia('(prefers-color-scheme: dark)')
                          .matches
                  else return false
              })()
                ? 'dark'
                : 'light'
            : theme
    }, [theme])

    useEffect(() => {
        switch (theme) {
            case 'auto': {
                const listener = (ev: MediaQueryListEvent) => {
                    if (ev.matches) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.add('dark')
                    }
                }
                window
                    .matchMedia('(prefers-color-scheme: dark)')
                    .addEventListener('change', listener)
                break
            }
            case 'dark': {
                document.documentElement.classList.add('dark')
                break
            }
            case 'light': {
                document.documentElement.classList.remove('dark')
                break
            }
        }
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((theme) => {
            switch (theme) {
                case 'auto': {
                    return window.matchMedia('(prefers-color-scheme: dark)')
                        .matches
                        ? 'light'
                        : 'dark'
                }
                case 'dark': {
                    return 'light'
                }
                case 'light': {
                    return 'dark'
                }
            }
        })
    }, [setTheme])

    return (
        <ThemeContext.Provider
            value={{
                toggleTheme,
                theme: _theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
