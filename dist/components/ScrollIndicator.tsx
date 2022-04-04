import React, { useState, useEffect } from 'react'
import { FaReact } from 'react-icons/fa'
import styles from '../../styles/Footer.module.css'
import usePortfolioContext from '../hooks/usePortfoliocontext'

export const ScrollIndicator = () => {
    const [toTop, setToTop] = useState<boolean>(false)
    const { scrolling, colorGradient, headerRef } = usePortfolioContext()
    const { current } = headerRef

        //arrow to go back to top
    useEffect(() => {
        if (toTop && current) {
        current.scrollIntoView({behavior: 'smooth'})
        setToTop(!toTop)
        }
    }, [toTop])

  return (
    <div  className={ styles.arrowUp } 
            onClick={ () => setToTop(!toTop) } 
            style={{ background: `linear-gradient(to bottom, #f2f3f4 ${100-colorGradient}%, #fe5f55 0%)` }}
      >
        <div className={ styles. arrowUpInner }>
          <FaReact  size={50}
                    style={{ transform: `rotate(${30*(scrolling/100-2.25)}deg)` }}
          />
        </div>
      </div>
  )
}

