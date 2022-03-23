import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Interest.module.css'

export type IInterestProps = {
    gifRef: React.LegacyRef<HTMLDivElement>
    interest: {
        title: string
        gif: string
        gif_static: string
        text: string
        bg: string
        id: number
    }
}

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
        <div className={ styles.imgContainer }>
          { gif && <Image src={ img } 
                          width='100%' 
                          height='100%' 
                          quality='25'
                          layout='responsive' 
                          objectFit='contain' 
                          alt={ interest.title } 
                          className={ styles.img }/> }
        </div>
        <p>{ text }</p>
    </div>
  )
}
