import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/Header.module.scss'
import usePortfolioContext from '../hooks/usePortfoliocontext'

export const NavLink = ({ link }: {link: { name: string, path: string } }) => {
  const { menu, setMenu, desktop } = usePortfolioContext()
  const router = useRouter()

  return (
    <div 
      className={ styles.linkContainer }
      onClick={ !desktop ? () => setMenu(!menu) : undefined }
    >
      <Link href={ link.path } >
        { link.name }
      </Link>
      <div className={ router.pathname === link.path ? styles.aActive : styles.aNotActive }></div>
    </div>
  )
}

