import React from 'react'
import styles from '../../styles/Skills.module.css'
import { IListItemProps } from '../types'

export const ListItem = ({ mediaItem, index, spanOpen }: IListItemProps) => {
  return (
    <li 
        className={ spanOpen ? styles.list : undefined }
        style={!spanOpen ? {transition: `opacity 0s linear 0s`} : {transition: `opacity 0s linear ${index + 0.75}s`}}
    >
        { mediaItem }
    </li>
  )
}

