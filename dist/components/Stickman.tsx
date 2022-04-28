import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.css'
import { stickmanArr } from '../data'
import usePortfolioContext from '../hooks/usePortfoliocontext'
import useScroll from '../hooks/useScroll'

export const Stickman = () => {
  
  const { desktop, stickmanRef } = usePortfolioContext()
  const stickman = useScroll()
      
  return (
    <div  className={ styles.scrollRoll }
          ref={ stickmanRef }
    >
      <p className={ styles.text }>
        { desktop ? 'Certificates earned through FreeCodeCamp, Hackerrank and Framework. Also passed several LinkedIn skill tests.' : 'Certificates earned.' }
      </p>
      <div  className={ styles.imgScrollContainer } 
            style={{ width: `${ 100 - (stickman * 5) }%` }}
      >
      </div>
      <div  className={ styles.pushing }
            style={{ transform: `translateX(${ (stickman - 2) * 50 }%)` }}
      >
        <div className={ styles.imgWrapper }>
          <Image  src={ stickman % 2 === 0 ? stickmanArr[0] : stickmanArr[1] } 
                  objectFit='contain' 
                  layout='fill' 
                  alt='stickman pushing'
                  priority={ true }
          />
        </div>
      </div>
    </div>
  )
}
