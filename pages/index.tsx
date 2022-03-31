import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { ThemeBox } from '../dist/components/ThemeBox'
import { interests } from '../dist/data'
import { IInterestProps } from '../dist/components/Interest'

import usePortfolioContext from '../dist/hooks/usePortfoliocontext'
import useVisible from '../dist/hooks/useVisible'

import styles from '../styles/Home.module.css'

const DynamicInterest = dynamic<IInterestProps>(() => import('../dist/components/Interest').then(mod => mod.Interest))

const Home: NextPage = () => {
  const { themeStrings, menu } = usePortfolioContext()
  const [expanded, setExpanded] = useState(false)
  const [h1Animate, setH1Animate] = useState(false)
  const router = useRouter()
  const imgRef = useRef(null)
  const gifRef = useRef<null | HTMLDivElement>(null)
  const isVisible = useVisible(imgRef, '-50%')

  useEffect(() => {
    const animation: ReturnType<typeof setTimeout> = setTimeout(() => {
      setH1Animate(true)
    }, 1000)
  
    return () => clearTimeout(animation)
    }, [])

  useEffect(() => {
    //collapse p when section three is not visible and scroll to top of next section (otherwise you'll jump lower..)
    if (!isVisible && expanded) {
      setExpanded(false)
      if (gifRef.current) gifRef.current.scrollIntoView()
    }
  }, [isVisible])
  
  return (
    <div className={menu && router.pathname === '/' ? [ styles.containerBlurred, styles.container ].join(' ') : styles.container}>
      <Head>
        <title>IamBram Front End Development & Web Design</title>
        <meta name="Description" content="Junior Developer for hire, Front End Development with React, Javascript, SCSS, CSS3."/>
        <meta name='Author' content='Bram peter van Zalk'/>
        <meta name='robots' content='all'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/*-------------------------------- running theme ticker-------------------------------- */}
      <div className={ styles.themeTicker }>
        <div className={ styles.themeInner }>
            {   themeStrings.map((item: string) => 
                    <ThemeBox key={ item } item={ item }/>                               
                )
            }
        </div>
      </div>
{/*--------------------------------top section-------------------------------- */}
      <section className={[ styles.sectionOne, styles.section ].join(' ')} title='plain background with code grafiti'>
        <div>
          <h1 className={ h1Animate ? [styles.Iam, styles.IamAnimated].join(' ') : styles.Iam }>
            Iam
          </h1>
          <h1 className={ h1Animate ? [styles.Bram, styles.BramAnimated].join(' ') : styles.Bram }>
            Bram
          </h1>
        </div>
        <aside>
          Inquisitive + creative <br/>={'>'} Front End Development
        </aside>
        <div>
          <a download href='/BpvanZalk_CV.pdf' className={ styles.download } aria-label='button to download cv'>
            Download my CV
          </a>
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
      <section className={ expanded && isVisible ? [styles.sectionThree, styles.sectionThreeLoaded, styles.sectionThreeExpanded].join(' ')
                          : isVisible ? [styles.sectionThree, styles.sectionThreeLoaded].join(' ')  
                          : styles.sectionThree }  
                          ref={ imgRef }
                          title='image of village in oil filter style'
      >
        <div className={ isVisible ? [styles.divOnImg, styles.divOnImgLoaded].join(' ') : styles.divOnImg}>
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
              Venturing into development is another phase in my life. I am more settled and enjoying family life, so I feel ready for the next step. I rolled into this by accident, trying to rewrite indicators that I used for my stock trading. This turned out to be Javascript and with lots of googling to make them work for me, I slowly got sucked into it. I started a Udemy course on Javascript as I was interested and before I knew it I was months down the line learning React etc. 
            <br/>
            <br/> 
            Time has really flown by and the combination of the visual and the problem solving has really got me hooked. I would love to keep on learning new things and one day have a dream job, helping to develop something that will have a positive impact on our planet and its people.
          </p>
        </div>
      </section>
{/*--------------------------------my important things section-------------------------------- */}
      <section className={ styles.sectionFour }>
        { interests.map(interest => <DynamicInterest gifRef={ gifRef } key={ interest.id } interest={ interest } />) }
      </section>
    </div>
  )
}

export default Home
