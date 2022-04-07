import { useRouter } from "next/router"
import React, { createContext, useEffect, useState, useRef } from "react"
import { ProviderProps } from "../types"
import useMediaQuery from "../hooks/useMediaQuery"

export const PortfolioContext = createContext<ProviderProps | undefined>(undefined)

export const PortfolioContextProvider:React.FC = ({ children }) => {
    const [theme, setTheme] = useState<string>('standard')
    const [menu, setMenu] = useState<boolean>(false)
    const [scroll, setScroll] = useState(0)
    const [scrolling, setScrolling] = useState(0)
    const [loadStickman, setLoadStickman] = useState(false)
    const [load, setLoad] = useState(0)
    const [colorGradient, setColorGradient] = useState(0)
    const desktop = useMediaQuery('(min-width: 55em)')
    const bottomRef = useRef(null) 
    const headerRef = useRef(null)
    const offset: React.MutableRefObject<number> = useRef(0)
    const router = useRouter()

    const themeStrings: string[] = ['Standard', 'Rainbows&Unicorns', 'Moody', 'Random']

    useEffect(() => {
            //disable scroll when mobile menu is open
        if (menu) {
            document.documentElement.classList.add('noScroll')
        } else {
            document.documentElement.classList.remove('noScroll')
        }
    }, [menu])

    useEffect(() => {
            //wait for useRouter on page load
        if (!router.pathname) return
            //than add listener
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [router])
    
    useEffect(() => {
        //---------setscrolling for stickman--------//
        //no need to run stickman if we do not need it
        if (!loadStickman) return     
        window.addEventListener('scroll', scrollStickman)
        return () => window.removeEventListener('scroll', scrollStickman)
    }, [loadStickman])

    const scrollHandler = () => {
    //---------setscrolling for rotating icon--------//
        setScrolling(window.scrollY)
            //calculate which percentage of entire page has been scrolled. 
        const topOfBottom = window.innerHeight
        const bodyHeight = document.body.offsetHeight - 225 - topOfBottom
        const offsetPercentage = Math.round((window.scrollY / bodyHeight) * 100)
            //To set the 'filling up' background to indicate how far down the page you are.
        if (offsetPercentage !== colorGradient && offsetPercentage < 101) setColorGradient(offsetPercentage)
    }
    
    const scrollStickman = () => {
        console.log(offset.current)
        //check if offset is 100 more than previous, if so then increment scrolling by 1
        let current = Math.floor((window.scrollY - offset.current) / 100)
        if (scroll === current) return
        return current < 11 ? setScroll(current) : setScroll(0)        
    }

    const value: ProviderProps = { 
        theme, setTheme, themeStrings, desktop, menu, setMenu, bottomRef, headerRef, scroll,
        scrolling, setScroll, setScrolling, colorGradient, loadStickman, setLoadStickman
    }

    return(
        <PortfolioContext.Provider value={ value }>
            { children }
        </PortfolioContext.Provider>
    )
}