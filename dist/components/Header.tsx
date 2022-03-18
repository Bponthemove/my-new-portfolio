import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import usePortfolioContext from '../hooks/usePortfoliocontext' 
import { NextPage } from 'next'
import { NavLink } from './NavLink'
import { navLinks } from '../data' 
import styles from '../../styles/Header.module.scss'

const Header: NextPage = () => {
    const { theme, setTheme, desktop, menu, setMenu } = usePortfolioContext()

    useEffect(() => {
        document.documentElement.className = ''
        document.documentElement.classList.add(`theme-${theme}`)
      }, [theme])
    
    return (
        <>
            <header className={ styles.container } id='top'>
                <div className={ styles.headerLeft }>
                    <h1>
                        IamBram
                    </h1>
                    
                </div>
                <nav className={ styles.navContainer }>
                    { !desktop && 
                        <GiHamburgerMenu
                            className={ !menu ? styles.hamburger : [ styles.hamburgerOpen, styles.hamburger].join(' ') } 
                            size={60}
                            onClick={ () => setMenu(!menu) }    
                        /> 
                    }
                <div className={ styles.navlinkContainer }>
                    { navLinks.map((link, index) => 
                        <NavLink key={ index } link={ link }/>
                    ) }
                </div>
                </nav>
            </header>
            { menu ?
            <div className={ styles.navLinksMobileContainer }>
                <div className={ styles.navLinksMobile }>
                    { navLinks.map((link, index) => 
                        <NavLink key={ index } link={ link }/>
                    ) }
                </div>
            </div>
            :
            null }     
        </>
  )
}

export default Header
