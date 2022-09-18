import { createContext, useCallback, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FCWithChildren } from "../types/globals";

interface ThemeContextState {
    toggleTheme(): void
}

const ThemeContext = createContext({} as ThemeContextState)

export const useTheme = () => useContext(ThemeContext)


type Theme = 'dark' | 'light' | 'auto'

export const ThemeProvider = ({ children }: FCWithChildren) => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', 'auto')

    useEffect(() => {
        switch(theme) {
            case 'auto': {
                const listener = (ev: MediaQueryListEvent) => {
                    if(ev.matches) {
                        document.documentElement.classList.add('dark')
                    } else {
                        document.documentElement.classList.add('dark')
                    }
                }
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener)
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
        setTheme(theme => {
            switch(theme) {
                case 'auto': {
                    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark'
                }
                case 'dark': {
                    return 'light'
                }
                case 'light': {
                    return 'dark'
                }
            }
        })
    }, [])

    return (
        <ThemeContext.Provider value={{
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}