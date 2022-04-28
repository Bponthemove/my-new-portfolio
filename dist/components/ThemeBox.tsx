import React, { useState, useEffect } from 'react'
import styles from '../../styles/Home.module.css'

export const ThemeBox = () => {
  const [theme, setTheme] = useState<string>('Standard')
  
  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme])

  return (
    <div className={ styles.themeInner }>
      
    </div>
  )
}
