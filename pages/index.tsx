import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
  //--components--//
import { ThemeBox } from '../dist/components/ThemeBox';
import { Gear } from '../dist/components/Gear';
import { H1 } from '../dist/components/H1';
  //--data--//
import { interests } from '../dist/data';
  //--types--//
import { IInterestProps } from '../dist/types';
  //--hooks--//
import usePortfolioContext from '../dist/hooks/usePortfoliocontext';
import useVisible from '../dist/hooks/useVisible';
import useScroll from '../dist/hooks/useScroll';
  //--styles--//
import styles from '../styles/Home.module.css';
  //--images--//
import oldMan from '../public/images/stickman-old-man.png';

const DynamicInterest = dynamic<IInterestProps>(() => import('../dist/components/Interest').then(mod => mod.Interest));

const Home: NextPage = () => {
  const { menu, notMobile, toBottom, leaveHiddenOpen, setLeaveHiddenOpen } = usePortfolioContext();
  const [oilImgVis, setOilImgVis] = useState(false)
  const router = useRouter();
  const imgRef = useRef(null);
  const qouteRef = useRef(null);
  const gifOneRef = useRef<null | HTMLDivElement>(null);
  const gifTwoRef = useRef<null | HTMLDivElement>(null);
  const gifThreeRef = useRef<null | HTMLDivElement>(null);
  const oilImg = useVisible(imgRef, {rootMargin: '0% 0% -50% 0%'});
  const qoute = useVisible(qouteRef, {rootMargin: '0% 0% 0% 0%'});
  const gears = useScroll();

  useEffect(() => {
    if (qoute?.isIntersecting) setLeaveHiddenOpen(gears);
  }, [qoute, setLeaveHiddenOpen, gears]);

  useEffect(() => {
    if (oilImg?.isIntersecting) setOilImgVis(true);
  }, [oilImg])
  
  return (
    <div className={menu && router.pathname === '/' ? [ styles.containerBlurred, styles.container ].join(' ') : styles.container}>
{/*-------------------------------- running theme ticker-------------------------------- */}
      <div className={ styles.themeContainer }>
        <ThemeBox />
      </div>
{/*-------------------------------- gear spinner-------------------------------- */}
      <Gear/>
{/*--------------------------------iambram section-------------------------------- */}
      <section className={[ styles.sectionOne, styles.section ].join(' ')} title='plain background with code grafiti'>
        <H1/>
        <aside>
          Inquisitive + creative <br/>={'>'} Front End Development
        </aside>
        <div 
          className={styles.btnContainer}  
        >
          <div className={styles.frontBtn}>
            Download my CV
          </div>
          <div className={styles.backBtn}>
            <a download href='/BpvanZalk_CV.pdf' className={ styles.download } aria-label='button to download cv'>
              graphic format
            </a>
            <a download href='/BpvanZalk_CV.pdf' className={ styles.download } aria-label='button to download cv'>
              plain format
            </a>
          </div>
        </div>
      </section>
{/*--------------------------------hidden gear section-------------------------------- */}
      <section  className={ styles.hiddenContainer }
                style={ leaveHiddenOpen !== 0 && notMobile ? { height: `${ (leaveHiddenOpen - 2) * 50 }px` }
                        : leaveHiddenOpen !== 0 ? { height: `${ (leaveHiddenOpen - 2) * 35 }px` }  
                        : toBottom ? { height: 0 }
                        : notMobile ? { height: `${ (gears - 2) * 50 }px` }
                        : { height: `${ (gears - 2) * 35 }px` }}
      >
        <div className={ styles.hiddenInnerContainer }>
          <div className={ styles.hiddenHeaderContainer }>
            <div className={ styles.meWrapper }/>
            <div className={ styles.headerTextWrapper }>
              <h2>Hello World</h2>
              <h4>I am Bram, a Front End Developer based near Reading, UK.</h4>
            </div>
          </div>
          {notMobile ?
          <> 
          <p>
            A passion for amazing, fun, stylish and fast applications. I love building with Javascript, React and CSS. My passion for tech comes from the idea of simple ideas making big impacts  via innovative solutions. Like <Link href='https://www.thetreeapp.org/'>Treeapp</Link>, made by a small team but has a big impact. And a passion for tech that is incredibly user-friendly and fast, like the gov.uk websites. Simple layout, incredibly user-friendly and does what it is suppose to do (a great user-experience).
          </p>
          <div className={ styles.oldMan }>
            <div className={ styles.oldManImgWrapper }>
              <Image  src={ oldMan } alt='old stickman with stick' title='old stickman with stick'/>
            </div>
            <p>
              Back in the old days with dial up connections, I used to love playing around with dreamweaver, wordperfect, windows 3.11 etc. There you have it, I am THAT old 😉. A good 20 years later, I rediscovered how much I love the process of building and creating, using code to visualize and engage.
            </p>
          </div>
          </>
          :
          <p>
            A passion for amazing, fun, stylish and fast applications. I love building with Javascript, React and CSS. My passion for tech comes from the idea of simple ideas making big impacts via innovative solutions. I love the process of building and creating, using code to visualize and engage.
          </p>
          }
        </div>
      </section>     
{/*--------------------------------qoute section-------------------------------- */}
      <section className={leaveHiddenOpen !== 0 ? [styles.sectionTwo, styles.section, styles.sectionTwoVis].join(' ') : [styles.sectionTwo, styles.section].join(' ')}> 
        <div className={ styles.divOne }>
          <h2>Front end development</h2>
          <p>Please explore and see who I am and what I have to offer. </p>
          <div className={styles.linksContainer}>
            <Link href='/projects'>My Code</Link>
            <Link href='/skills'>My Learning and Experience</Link>
            <Link href='#passions'>My Other Passions</Link>
          </div>
        </div>
        <div 
          className={ styles.divQoute }
          ref={qouteRef}
        >
          <q><b>
          Great things come from hard work and perseverance.
          </b></q>
          <br/><br/>
          <q><b>
          No Excuses.
          </b></q>
          <br/><br/>
          <cite>Kobe Bryant</cite>
        </div>
      </section>
{/*--------------------------------oil image section-------------------------------- */}
      <section  className={oilImgVis ? [styles.sectionThree, styles.sectionThreeLoaded, styles.sectionThreeExpanded].join(' ') 
                          : styles.sectionThree }  
                ref={ imgRef }
                title='image of village in oil filter style'
      >
        <div  className={ oilImgVis ? [styles.divOnImg, styles.divOnImgLoaded].join(' ') : styles.divOnImg }>
          <p>
            Being creative and solving problems is what I do everyday, either with my keyboard and mouse, my carpentry tools or just playing some good old board or card games with friends and family. 
          </p> 
        </div>
      </section>
{/*--------------------------------my important things section-------------------------------- */}
      <section 
        className={ styles.sectionFour }
        id='passions'
      >
        <div className={ styles.sectionFourInner }>
          { interests.map(interest => 
            <DynamicInterest  gifOneRef={ gifOneRef } 
                              gifTwoRef={ gifTwoRef } 
                              gifThreeRef={ gifThreeRef }
                              key={ interest.id } 
                              interest={ interest } />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
