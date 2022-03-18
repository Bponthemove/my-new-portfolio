import React, { createContext, useEffect, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"

interface ProviderProps {
    themeStrings: string[]
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
    desktop: boolean
}

export const PortfolioContext = createContext<ProviderProps | undefined>(undefined)

export const PortfolioContextProvider:React.FC = ({ children }) => {
    const [theme, setTheme] = useState<string>('standard')
    const [menu, setMenu] = useState<boolean>(false)
    const desktop: boolean = useMediaQuery('(min-width: 55em)')

    const themeStrings: string[] = ['Standard', 'Rainbows&Unicorns', 'Moody', 'Random']

    useEffect(() => {
        if (menu)  window.scrollTo(0,0)
    }, [menu])
    if (menu) console.log(window)

    const value: ProviderProps = { 
        theme, setTheme, themeStrings, desktop, menu, setMenu
    }

    return(
        <PortfolioContext.Provider value={ value }>
            { children }
        </PortfolioContext.Provider>
    )
}