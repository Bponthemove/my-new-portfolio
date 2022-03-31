import { NextPage } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
  //--components & types--//
import Certificate from '../dist/components/Certificate'
import { ListItem } from '../dist/components/ListItem'
import { Code } from '../dist/components/Code'
import { IPastProps } from '../dist/components/Past'
  //--custom hooks--//
import usePortfolioContext from '../dist/hooks/usePortfoliocontext'
  //--styles--//
import styles from '../styles/Skills.module.css'
  //--data--//
import { personality, media, pastTrades, myCode, stickmanArr, certificates } from '../dist/data'
  //--images--//
import code from '../public/images/code.jpg'
import graduation from '../public/images/graduation.jpg'
import stickPoint from '../public/images/paro-AL-pointing-right.png'
  //--icons--//
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGit, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiJquery, SiJavascript} from 'react-icons/si'

const DynamicPast = dynamic<IPastProps>(() => import('../dist/components/Past').then(mod => mod.Past))
 

const Skills: NextPage = () => {
  const [random, setRandom] = useState<number>(10)
  const [spanOpen, setSpanOpen] = useState<boolean>(false)
  const [showPage, setShowPage] = useState<boolean>(false)
  const [sectionOpen, setSectionOpen] = useState<boolean>(false)
  const { scroll, desktop } = usePortfolioContext()
  

{/* ----------------------------random to randomly highlight skill in section personal skills---------------------------------- */}
  useEffect(() => {
    const skills: ReturnType<typeof setInterval> = setInterval(() => {
      setRandom(Math.floor(Math.random() * 8))
    }, 2000)
    return () => clearInterval(skills)
  }, [])

{/* ----------------------------------rotate > after 1sec of loading--------------------------------------- */}
  useEffect(() => {
    if (spanOpen) return
    const timerOne: ReturnType<typeof setTimeout> = setTimeout(() => {
      setSpanOpen(true)
    }, 1000)

    return () => clearTimeout(timerOne)
    
  }, [spanOpen])

  useEffect(() => {
    if (!spanOpen) return
    const timerTwo: ReturnType<typeof setTimeout> = setTimeout(() => {
      setShowPage(true)
    }, 6000)

    return () => clearTimeout(timerTwo)
  }, [spanOpen])

  return (
    <>  
   {/* ----------------------------------top section - Media used----------------------------------- */}
      <section className={ showPage ? [ styles.sectionOne, styles.sectionOneOpen ].join(' ') : styles.sectionOne }>
        { desktop && <div className={ styles.imagesContainer }>
            <div className={ styles.imgCodeContainer }>
                <Image src={ code } layout='responsive' alt='Image with lines of code' priority={ true } quality='90' placeholder='blur'/>
            </div>
            <div className={ styles.stickPointContainer }>
                <Image src={ stickPoint } width='100%' height='100%' layout='responsive' objectFit='contain' alt='stickman pointing' priority={ true }/>
            </div>
          </div>
        }
        <div className={ styles.mediaContainer }>
        { !desktop && <div className={ styles.imgCodeContainer }>
            <Image src={ code } layout='responsive' alt='Image with lines of code' priority={ true } quality='90' placeholder='blur'/>
          </div> 
        }
          <div className={ styles.textCodeContainer}>
            <h3>Self Taught.</h3>
            <p>Self taught as I had to split my time between working, studying and a young family.</p>
            <div className={ styles.mediaList }>
              <h5>Media used</h5>
              <ul>
                <span className={ spanOpen ? styles.spanOpen : styles.spanClosed }>
                  {'>'}
                </span>
                { media.map((mediaItem, index) => <ListItem key={ index } mediaItem={ mediaItem} index={ index } spanOpen={ spanOpen }/>) }
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* ----------------------------------scrollAnimation--------------------------------------- */}
      <div className={ styles.scrollRoll }>
        <div  className={ styles.imgScrollContainer } 
              style={{ transform: `translateX(${scroll*(100 / 12)}vw)` }}
        >
          <Image src={ stickmanArr[scroll] } objectFit='contain' layout='fill' />
        </div>
      </div>
{/* ----------------------------------Certificates--------------------------------------- */}
      <section className={ styles.certSection }>
        <div className={ styles.graduationContainer }>
          <Image src={ graduation } objectFit='cover' height={ '100%' } width={ '100%' } layout='responsive' alt='graduates throwing their hats' quality='90' placeholder='blur'/>
        </div>
        <div className={ styles.certificatesContainer }>
          <ul>
            { certificates.map(certificate => <Certificate key={ certificate.id } certificate={ certificate }/>) }
          </ul>
        </div>
      </section>
{/* ----------------------------------ticker - skills--------------------------------------- */}
      <div className={ styles.ticker }>
        <div className={ styles.innerTicker }>
          <FaHtml5/><FaCss3Alt/><FaSass/><FaReact/><FaGit/><FaNodeJs/><FaAws/><SiNextdotjs/><SiExpress/><SiMongodb/><SiJquery/><SiJavascript/>
        </div>
      </div>
{/* ----------------------------------personal skills--------------------------------------- */}
      <section className={ styles.personality }>
        <div className={ styles.textPersonality }>
          <p>I am an inquisitive and caring person, who likes to succeed in what he is doing. A teamplayer as well as an independent professional.</p>
          <p>Having worked in multiple industries with very different people, I have been exposed to a wide range of characters, accompanied by a wide range of characteristics.</p>
          <p>This has made me into a person who is independent, confident and who is always learning new skills.</p>
        </div>
        <div className={ styles.bottomPersonality }>
          { personality.map((skill: string, index: number) => 
            <p key={ index } className={ index === random ? styles.pActive : undefined }>{ skill }</p>
          )}
        </div>
        {/* --------overlay container - Code button-------- */}
        <div  className={ styles.codeBtn } 
              onClick={ () => setSectionOpen(!sectionOpen) }
              style={ sectionOpen ? { cursor: 'url(/images/arrowUp.png), pointer' } : { cursor: 'url(/images/arrowDown.png), pointer' }}
        >
              Code
        </div>
        {/* ----------------------------------------------- */}
      </section>
{/* ----------------------------------My Code Open & close with code button--------------------------------------- */}
      <section className={ styles.sectionCode }>
        <div className={ sectionOpen ? styles.codeContainer : [ styles.codeContainer, styles.codeContainerClosed ].join(' ') }>
              { myCode.map(code => <Code code={ code } key={ code.id }/>) }
        </div>
      </section>
{/* ----------------------------------absolute image overlay--------------------------------------- */}
      <div className={ styles.parallax } title='beautiful landscape'>
  {/* ----------------------------------Non tech history--------------------------------------- */}
        <section className={ styles.nonTechSection }>
          { pastTrades.map(past => <DynamicPast key={ past.id } past={ past } />) }
        </section>   
      </div>
    </>
  )
}

export default Skills
