import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import styles from '../../styles/Code.module.scss'

interface Props {
    code: 
    {
        img: string
        text: string
    }
}

export const Code = ({ code }: Props) => {

  return (
    <div className={ styles.codeContainer }>
        <div className={ styles.imgContainer }>
            <Image src={ code.img } width='100%' height='100%' layout='responsive' objectFit='contain'></Image>
        </div>
        <p>{ code.text }</p>
        <FaGithub size={50} />
    </div>
  )
}
