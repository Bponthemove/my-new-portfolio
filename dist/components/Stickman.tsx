import React, {useEffect, useState, useRef} from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.css'
import { stickmanArr } from '../data'
import usePortfolioContext from '../hooks/usePortfoliocontext'
import useVisible from '../hooks/useVisible'

export const Stickman = () => {
  const [loadStickman, setLoadStickman] = useState(false)
    const offset: React.MutableRefObject<number> = useRef(0)
    const stickmanRef = useRef<HTMLDivElement | null>(null)
    const { scroll, setScroll } = usePortfolioContext()
    const stickmanVisible = useVisible(stickmanRef)

    {/* --------------if stickman in viewport set loadStickman to true to start scroll function----------------*/}
  useEffect(() => {
    if (stickmanVisible !== loadStickman) setLoadStickman(stickmanVisible)
  }, [stickmanVisible])

    useEffect(() => {
        //---------setscrolling for stickman--------//
        //no need to run stickman if we do not need it
        if (!loadStickman) return     
        window.addEventListener('scroll', scrollStickman)
        return () => window.removeEventListener('scroll', scrollStickman)
    }, [loadStickman])

    const scrollStickman = () => {
        console.log(offset.current)
        //check if offset is 100 more than previous, if so then increment scrolling by 1
        let current = Math.floor((window.scrollY - offset.current) / 100)
        if (scroll === current) return
        return current < 11 ? setScroll(current) : setScroll(0)        
    }

  return (
    <div  className={ styles.scrollRoll }
          ref={ stickmanRef }
    >
        <div  className={ styles.imgScrollContainer } 
              style={ { transform: `translateX(${scroll * (100 / 12)}vw)`, transition: 'transform 0.05s ease-in-out' } }
        >
          <Image  src={ stickmanArr[scroll] } 
                  objectFit='contain' 
                  layout='fill' 
                  alt={ stickmanArr[scroll].slice(8, stickmanArr[scroll].length - 4) }
          />
        </div>
      </div>
  )
}
