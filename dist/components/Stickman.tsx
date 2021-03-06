import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Skills.module.css';
import { stickmanArr } from '../data';
import usePortfolioContext from '../hooks/usePortfoliocontext';
import useScroll from '../hooks/useScroll';

export const Stickman = () => {
  
  const { desktop, stickmanRef } = usePortfolioContext();
  const stickman = useScroll();
      
  return (
    <div  className={ styles.scrollRoll }
          ref={ stickmanRef }
    >
      <p className={ styles.text }>
        { desktop ? 'Certificates earned through FreeCodeCamp, Hackerrank and Framework. Also passed several LinkedIn skill tests.' : 'Certificates earned.' }
      </p>
      <div  className={ styles.imgScrollContainer } 
            style={{ width: `${ 100 - (stickman * 5) }%`, transition: '0.2s width' }}
      >
      </div>
      <div  className={ styles.pushing }
            style={{ transform: `translateX(${ (stickman - 2) * 50 }%)`, transition: '0.2s transform' }}
      >
        <div className={ styles.imgContainer }>
          <div className={ stickman%2 !== 0 ? [styles.imgZeroWrapper, styles.hidden].join(' ') : styles.imgZeroWrapper }>
            <Image  src={ stickmanArr[0] } 
                    objectFit='contain' 
                    layout='fill' 
                    alt='stickman pushing'
                    priority
            />
          </div>
          <div className={ stickman%2 === 0 ? [styles.imgOneWrapper, styles.hidden].join(' ') : styles.imgOneWrapper }>
            <Image  src={ stickmanArr[1] } 
                    objectFit='contain' 
                    layout='fill' 
                    alt='stickman pushing'
                    priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
