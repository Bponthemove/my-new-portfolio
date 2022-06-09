import React from 'react';
import Header from './Header';
import { Footer } from './Footer';

const Layout: React.FC = ({ children }) => {
  
  return (
    <>
        <Header/>
          <main>
            { children }
          </main>
        <Footer/>
        <a title="Google Analytics Alternative" href="https://clicky.com/101369265"><img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" /></a>
        <script async src="//static.getclicky.com/101369265.js"></script>
        <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101369265ns.gif" /></p></noscript>
    </>
  );
};

export default Layout
