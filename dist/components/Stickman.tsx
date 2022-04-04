import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.css'
import { stickmanArr } from '../data'
import usePortfolioContext from '../hooks/usePortfoliocontext'

export const Stickman = () => {
    const { scroll } = usePortfolioContext()
  return (
    <div className={ styles.scrollRoll }>
        <div  className={ styles.imgScrollContainer } 
              style={{ transform: `translateX(${scroll*(100 / 12)}vw)` }}
        >
          <Image src={ stickmanArr[scroll] } objectFit='contain' layout='fill' />
        </div>
      </div>
  )
}
