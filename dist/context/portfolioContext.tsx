import { useRouter } from "next/router"
import React, { createContext, useEffect, useState, useRef } from "react"
import useMediaQuery from "../hooks/useMediaQuery"

interface ProviderProps {
    themeStrings: string[]
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
    menu: boolean
    setMenu: React.Dispatch<React.SetStateAction<boolean>>
    desktop: boolean
    bottomRef: React.RefObject<HTMLParagraphElement>
    headerRef: React.RefObject<HTMLDivElement>
    scroll: number
    setScroll: React.Dispatch<React.SetStateAction<number>>
    scrolling: number
    setScrolling: React.Dispatch<React.SetStateAction<number>>
}

export const PortfolioContext = createContext<ProviderProps | undefined>(undefined)

export const PortfolioContextProvider:React.FC = ({ children }) => {
    const [theme, setTheme] = useState<string>('standard')
    const [menu, setMenu] = useState<boolean>(false)
    const [scroll, setScroll] = useState(0)
    const [scrolling, setScrolling] = useState(0)
    const desktop: boolean = useMediaQuery('(min-width: 55em)')
    const bottomRef = useRef<HTMLParagraphElement>(null) 
    const headerRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const themeStrings: string[] = ['Standard', 'Rainbows&Unicorns', 'Moody', 'Random']

    useEffect(() => {
        if (menu) window.scrollTo(0,0)
    }, [menu])

    useEffect(() => {
        if (router.pathname !== '/skills') return
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
      }, [])

    const scrollHandler = () => {
        //check if offset is 100 more than previous, if so then increment scrolling by 1
        //still needs a ref on stickman section to use useVisible to see when it comes in view and then calculate the starting point
        const current = Math.floor(window.pageYOffset / 100) 
        if (scroll === current) return
        if (current < 11) return setScroll(current)
        if (current > 10) return setScroll(0)
    }

    const value: ProviderProps = { 
        theme, setTheme, themeStrings, desktop, menu, setMenu, bottomRef, headerRef, scroll,
        scrolling, setScroll, setScrolling
    }

    return(
        <PortfolioContext.Provider value={ value }>
            { children }
        </PortfolioContext.Provider>
    )
}