import { useRouter } from "next/router"
import React, { createContext, useEffect, useState, useRef } from "react"
import { ProviderProps } from "../types"
import useMediaQuery from "../hooks/useMediaQuery"

export const PortfolioContext = createContext<ProviderProps | undefined>(undefined)

export const PortfolioContextProvider:React.FC = ({ children }) => {
    // const [theme, setTheme] = useState<string>('standard')
    const [menu, setMenu] = useState<boolean>(false)
    const [leaveHiddenOpen, setLeaveHiddenOpen] = useState(0)
    const [toBottom, setToBottom] = useState(false)
    const [scroll, setScroll] = useState(2)
    const [scrolling, setScrolling] = useState(0)
    const [colorGradient, setColorGradient] = useState(0)
    const notMobile = useMediaQuery('(min-width: 35em)')
    const desktop = useMediaQuery('(min-width: 60em)')
    const bottomRef = useRef(null) 
    const headerRef = useRef(null)
    const stickmanRef = useRef(null)
    const gearRef = useRef(null)
    const router = useRouter()

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
        if (router.pathname !== '/') setLeaveHiddenOpen(0)
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [router])

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

    const value: ProviderProps = { 
        notMobile, desktop, menu, setMenu, bottomRef, headerRef, gearRef, scroll,
        scrolling, setScroll, colorGradient, stickmanRef, toBottom, setToBottom, 
        leaveHiddenOpen, setLeaveHiddenOpen
    }

    return(
        <PortfolioContext.Provider value={ value }>
            { children }
        </PortfolioContext.Provider>
    )
}