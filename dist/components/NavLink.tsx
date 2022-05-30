import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styles from '../../styles/Header.module.css';
import usePortfolioContext from '../hooks/usePortfoliocontext';
import useVisible from '../hooks/useVisible';

export const NavLink = ({ link }: {link: { name: string, path: string } }) => {
  const { toBottom, setToBottom, menu, setMenu, desktop, bottomRef } = usePortfolioContext();
  const router = useRouter();
  const { current } = bottomRef;
  const reachedBottom = useVisible(bottomRef, {});

  useEffect(() => {
    if (toBottom && current) {
      current.scrollIntoView({behavior: 'smooth'})
      if (!desktop) setMenu(!menu)
    }
  }, [toBottom]);

//this useEffect runs when we have reached the bottom and then sets toBottom to false so that the hidden gear section does not open when clicking contact.
  useEffect(() => {
    if (reachedBottom?.isIntersecting) setToBottom(!toBottom)
  }, [reachedBottom]);

  return (
    <div 
      className={ styles.linkContainer }
    >
      { link.path ?
        <div onClick={ !desktop ? () => setMenu(!menu) : undefined }>
          <Link href={ link.path }>
            { link.name }
          </Link>        
          <div className={ router.pathname === link.path ? styles.aActive : styles.aNotActive }></div>
        </div>    
        : 
        <button onClick={ () => setToBottom(!toBottom) } className={ styles.contactBtn} aria-label='button to scroll down to contact form'>
          Contact
        </button>        
      }
    </div>
  );
};

