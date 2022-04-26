import React from 'react'
import { FiMenu } from 'react-icons/fi'
import usePortfolioContext from '../hooks/usePortfoliocontext' 
import { NextPage } from 'next'
import { NavLink } from './NavLink'
import { navLinks } from '../data'
import styles from '../../styles/Header.module.css'

const Header: NextPage = () => {
    const { desktop, menu, setMenu, headerRef } = usePortfolioContext()
    
    return (
        <>
            <header className={ styles.container }>
                <div className={ styles.headerLeft } ref={ headerRef }>
                    <h1>
                        IamBram
                    </h1>
                    
                </div>
                <nav className={ styles.navContainer }>
                    { !desktop && 
                        <FiMenu
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
            <div className={ !menu ? styles.navLinksMobileContainer : [ styles.navLinksMobileContainer, styles.navLinksMobileContainerOpen].join(' ') }>
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
