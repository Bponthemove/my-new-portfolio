import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.scss'

interface Props {
    past: {
        img: string
        text: string
    }
    index: number
}

export const Past = ({ past, index }: Props) => {

    return (
        <div className={ styles.pastContainer }>
            <div className={ styles.pastImgContainer }>
                <Image src={ past.img } width='100%' height='100%' layout='responsive' objectFit='contain'/>
            </div>
            <p>{ past.text }</p>
        </div>
    )
}
