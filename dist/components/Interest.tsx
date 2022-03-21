import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Interest.module.scss'

type props = {
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

export const Interest = ({ interest, gifRef }: props) => {
    const {title, gif, gif_static, text, bg} = interest
    const [img, setImg] = useState<string>(gif_static) 

  return (
    <div    className={ styles.interest } 
            style={{backgroundColor: bg}}
            onMouseEnter={ () => setImg(gif) }
            onMouseLeave={ () => setImg(gif_static)}
            ref={interest.id === 1 ? gifRef : null}
    >
        <h2>{ title }</h2>
        {/* null needs to be loading placeholder */}
        {gif ? <Image src={ img } width={500} height={500} /> : null }
        <p>{ text }</p>
    </div>
  )
}
