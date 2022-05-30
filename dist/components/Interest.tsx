import React, { useState, useEffect } from 'react';
import { IInterestProps } from '../types';
import styles from '../../styles/Interest.module.css';
import usePortfolioContext from '../hooks/usePortfoliocontext';
import useVisible from '../hooks/useVisible';

export const Interest = ({ interest, gifOneRef, gifTwoRef, gifThreeRef }: IInterestProps) => {
    const { title, gif, gif_static, text, bg } = interest;
    const { desktop } = usePortfolioContext();
    const [img, setImg] = useState(gif_static);
    const gifOneVisible = useVisible(gifOneRef, {rootMargin: '0% 0% -50% 0%'});
    const gifTwoVisible = useVisible(gifTwoRef, {rootMargin: '0% 0% -50% 0%'});
    const gifThreeVisible = useVisible(gifThreeRef, {rootMargin: '0% 0% -50% 0%'});

    useEffect(() => {
      if (desktop) return
      if (gifOneVisible?.isIntersecting && interest.id === 1) setImg(gif)
      if (gifTwoVisible?.isIntersecting && interest.id === 2) setImg(gif)
      if (gifThreeVisible?.isIntersecting && interest.id === 3) setImg(gif)
      if (!gifOneVisible?.isIntersecting && interest.id === 1) setImg(gif_static)
      if (!gifTwoVisible?.isIntersecting && interest.id === 2) setImg(gif_static)
      if (!gifThreeVisible?.isIntersecting && interest.id === 3) setImg(gif_static)
    }, [gifOneVisible, gifTwoVisible, gifThreeVisible, desktop, setImg, gif, gif_static, interest]);

  return (
    <div    className={ styles.interest } 
            style={ {backgroundColor: bg }}
            onMouseEnter={ desktop ? () => setImg(gif) : undefined }
            onMouseLeave={ desktop ? () => setImg(gif_static) : undefined }
            ref={ interest.id === 1 ? gifOneRef 
                  : interest.id === 2 ? gifTwoRef 
                  : interest.id === 3 ? gifThreeRef 
                  : null }
    >
        <h2>{ title }</h2>
        {/* cant get Next Image to work with animated gif, so stepping back to img tag */}
        {/* seems like you can only use next Image with the unoptimized prop set to true for animated images, which seems that you might as well use the img tag */}
        <div className={ styles.imgContainer }>
          { gif && <img src={ img } 
                          width='100%' 
                          height='100%'  
                          alt={ interest.title } 
                          className={ styles.img }
                          title={ interest.title }/> }
        </div>
        <p>{ text }</p>
    </div>
  );
};
