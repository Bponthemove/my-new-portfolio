import React from 'react'
import Image from 'next/image'
import { ICodeProps } from '../types'
import styles from '../../styles/Projects.module.css'

export const Code = ({ code, setClickedId }: ICodeProps) => {

  return (
    <div 
      className={ styles.tile }
      onClick={ () => setClickedId(code.id) }
    >
      <Image src={ code.img } layout='fill' objectFit='cover' alt={code.img}></Image>
    </div>
  )
}
