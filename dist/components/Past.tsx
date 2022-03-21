import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.scss'

interface Props {
    past: {
        img: string
        textOne: string
        textTwo: string
        id: number
    }
}

export const Past = ({ past }: Props) => {

    return (
        <div className={ styles.pastContainer }>
            <div className={ styles.pastImgContainer }>
                <Image src={ past.img } width='100%' height='100%' layout='responsive' objectFit='contain'/>
            </div>
            <div className={ styles.spacer }/>
            <div className={ styles.pastTextContainer }>
                <p>{ past.textOne }</p>
                <br/>
                <p>{ past.textTwo }</p>
            </div>
        </div>
    )
}
