import type { NextPage } from 'next';
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
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const imgRef = useRef(null);
  const gifOneRef = useRef<null | HTMLDivElement>(null);
  const gifTwoRef = useRef<null | HTMLDivElement>(null);
  const gifThreeRef = useRef<null | HTMLDivElement>(null);
  const oilImgVisible = useVisible(imgRef, '-50%');
  const gears = useScroll();

  useEffect(() => {
    if (oilImgVisible) setLeaveHiddenOpen(gears);
  }, [oilImgVisible, setLeaveHiddenOpen, gears]);
  
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
        <div>
          <a download href='/BpvanZalk_CV.pdf' className={ styles.download } aria-label='button to download cv'>
            Download my CV
          </a>
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
              <h4>I am Bram, a web developer based near Reading, UK.</h4>
            </div>
          </div>
          <p>Web development has become my passion and I am very excited. Although having a degree in Hospitality Management, I am now pursuing my old passion and making a career of it.</p>
          { notMobile && 
          <div className={ styles.oldMan }>
            <div className={ styles.oldManImgWrapper }>
              <Image  src={ oldMan } alt='old stickman with stick' title='old stickman with stick'/>
            </div>
            <p>Back in the old days with dial up connections, I used to love playing around with dreamweaver, wordperfect, windows 3.11 etc. There you have it, I am THAT old 😉. A good 20 years later, I rediscovered how much I like building and creating.</p>
          </div> }
        </div>
      </section>     
{/*--------------------------------qoute section-------------------------------- */}
      <section className={[ styles.sectionTwo, styles.section ].join(' ')}> 
        <div className={ styles.divOne }>
          <h2>Front end development</h2>
          <p>Please explore and see who I am and what I have to offer. </p>
        </div>
        <div className={ styles.divQoute }>
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
      <section className={ expanded && leaveHiddenOpen !== 0 ? [styles.sectionThree, styles.sectionThreeLoaded, styles.sectionThreeExpanded].join(' ') 
                          : styles.sectionThree }  
                          ref={ imgRef }
                          title='image of village in oil filter style'
      >
        <div className={ leaveHiddenOpen !== 0 ? [styles.divOnImg, styles.divOnImgLoaded].join(' ') : styles.divOnImg}>
          <p>
            What I love is most things associated with family, friends, good food and the outdoors.  I enjoy a good party, but also an evening with friends doing board games. 
          </p> 
          <span onClick={ () => setExpanded(!expanded) }>
            { expanded ? '👇' : 'Discover more...' }
          </span>
          <p className={ expanded ? [styles.p, styles.pExpanded].join(' ') : styles.p }>
            I have always loved cooking and I make sure I cook most nights. Food and family are very important to me. I also enjoy building things for cooking, like our pizza oven. Other important routines are my bike rides, either on my road bike or on my mountain bike. 
            <br/>
            <br/>
            I have always enjoyed working/volunteering and chosen life/work style over steady career/money. I have travelled a lot and worked in France, Switzerland, Spain, Austria, Germany, New Zealand. Some seasonal, some volunteering and some for longer term, full-time employement. I have never been intimidated by learning new skills and languages and have always seen this as an opportunity rather than an obstacle.
            <br/>
            <br/>
              Venturing into development is another phase in my life. I am more settled and enjoying family life, so I feel ready for the next step. I rolled into this by accident, trying to rewrite indicators that I used for my stock trading. These were mainly written in Javascript and with lots of googling to make them work for me, I slowly got sucked into it. I started a Udemy course on Javascript as I was interested and before I knew it I was months down the line learning React etc. 
            <br/>
            <br/> 
            Time has really flown by and the combination of the visual and the problem solving has really got me hooked. I would love to keep on learning new things and one day have a dream job, helping to develop something that will have a positive impact on our planet and its people.
          </p>
        </div>
      </section>
{/*--------------------------------my important things section-------------------------------- */}
      <section className={ styles.sectionFour }>
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
