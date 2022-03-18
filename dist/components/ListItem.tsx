import React from 'react'
import styles from '../../styles/Skills.module.scss'

interface Props{
    mediaItem: string
    index: number
    spanOpen: boolean
}

export const ListItem = ({ mediaItem, index, spanOpen }: Props) => {
  return (
    <li 
        className={ spanOpen ? styles.list : undefined }
        style={!spanOpen ? {transition: `opacity 0s linear 0s`} : {transition: `opacity 0s linear ${index + 1.5}s`}}
    >
        { mediaItem }
    </li>
  )
}

