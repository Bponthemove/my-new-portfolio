import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.scss'
import usePortfolioContext from '../hooks/usePortfoliocontext'

export const NavLink = ({ link }: {link: { name: string, path: string } }) => {
  const { menu, setMenu, desktop, bottomRef } = usePortfolioContext()
  const [toBottom, setToBottom] = useState(false)
  const router = useRouter()
  const { current } = bottomRef

  useEffect(() => {
    if (toBottom && current) {
      current.scrollIntoView({behavior: 'smooth'})
      setToBottom(!toBottom)
    }
  }, [toBottom])

  return (
    <div 
      className={ styles.linkContainer }
      onClick={ !desktop ? () => setMenu(!menu) : undefined }
    >
      { link.path ?
        <>
        <Link href={ link.path }>
          { link.name }
        </Link>        
        <div className={ router.pathname === link.path ? styles.aActive : styles.aNotActive }></div>
        </>    
        : 
        <a onClick={ () => setToBottom(!toBottom) } className={ styles.contactBtn}>
          Contact
        </a>        
      }
    </div>
  )
}

