import React, { useState } from 'react'
//import Image from 'next/image'
import { IInterestProps } from '../types'
import styles from '../../styles/Interest.module.css'

export const Interest = ({ interest, gifRef }: IInterestProps) => {
    const {title, gif, gif_static, text, bg} = interest
    const [img, setImg] = useState(gif_static) 

  return (
    <div    className={ styles.interest } 
            style={{backgroundColor: bg}}
            onMouseEnter={ () => setImg(gif) }
            onMouseLeave={ () => setImg(gif_static)}
            ref={interest.id === 1 ? gifRef : null}
    >
        <h2>{ title }</h2>
        {/* cant get Next Image to work with animated gif, so stepping back to img tag */}
        {/* seems like you can only use next Image with the unoptimized prop set to true for animated images, which seems that you might as well use the img tag */}
        <div className={ styles.imgContainer }>
          { gif && <img src={ img } 
                          width='100%' 
                          height='100%' 
                          //quality='25'
                          //layout='responsive' 
                          //objectFit='contain' 
                          alt={ interest.title } 
                          className={ styles.img }/> }
        </div>
        <p>{ text }</p>
    </div>
  )
}
