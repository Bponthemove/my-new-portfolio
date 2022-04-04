import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { ICodeProps } from '../types'
import styles from '../../styles/Code.module.css'

export const Code = ({ code }: ICodeProps) => {

  return (
    <div className={ styles.code }>
        <div className={ styles.imgContainer }>
            <Image src={ code.img } width='100%' height='100%' layout='responsive' objectFit='contain' alt={code.img}></Image>
        </div>
        <p>{ code.text }</p>
        <a href={ code.link } target='_blank'>
          <FaGithub size={50}/>
        </a>
    </div>
  )
}
