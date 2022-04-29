import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import gear from '../../public/images/gear.png';
import usePortfolioContext from '../hooks/usePortfoliocontext';
import useScroll from '../hooks/useScroll';

export const Gear = () => {
    const { gearRef, leaveHiddenOpen } = usePortfolioContext();
    const gears = useScroll();

  return (
    <div 
        className={ styles.gearContainer }
        ref={ gearRef }
        style={ leaveHiddenOpen ? undefined : { transform: `rotate(${(gears - 2) * 5}deg)` }}
    >
        <Image 
            src={ gear }
            layout='responsive'
            width='100%'
            height='100%' 
            objectFit='contain' 
            alt='spinning gear'  
            priority={ true }
        />
    </div>   
  );
};
