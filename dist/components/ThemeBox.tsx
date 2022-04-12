import React, { useState, useEffect } from 'react'
import { Themes } from './Themes'
import { themeStrings } from '../data'
import styles from '../../styles/Home.module.css'

export const ThemeBox = () => {
  const [theme, setTheme] = useState<string>('Standard')
  
  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme])

  return (
    <div className={ styles.themeInner }>
      {   themeStrings.map((item: string) => 
              <Themes key={ item } 
                      item={ item }
                      setTheme={ setTheme }
              />                               
          )
      }
    </div>
  )
}

//each has now its own state, so make a component wrapper to put state and fuctionality in and have children items