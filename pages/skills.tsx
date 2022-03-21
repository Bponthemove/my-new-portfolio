import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ListItem } from '../dist/components/ListItem'
import { Code } from '../dist/components/Code'
import { Past } from '../dist/components/Past'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGit, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiJquery, SiJavascript} from 'react-icons/si'
import styles from '../styles/Skills.module.scss'
import { personality, media, pastTrades, myCode } from '../dist/data'
import code from '../public/images/code.jpg'

const Skills: NextPage = () => {
  const [random, setRandom] = useState<number>(10)
  const [spanOpen, setSpanOpen] = useState<boolean>(false)
  const [sectionOpen, setSectionOpen] = useState<boolean>(false)

{/* ----------------------------------random to randomly highlight skill box--------------------------------------- */}
  useEffect(() => {
    const skills: ReturnType<typeof setInterval> = setInterval(() => {
      setRandom(Math.floor(Math.random() * 8))
    }, 2000)
    return () => clearInterval(skills)
  }, [])

{/* ----------------------------------rotate > after 1sec of loading, or after clicking it--------------------------------------- */}
  useEffect(() => {
    if (spanOpen) return
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setSpanOpen(true)
    }, 1000)
  }, [spanOpen])

  return (
    <>
{/* ----------------------------------top section - Media used--------------------------------------- */}
      <section className={ styles.sectionOne }>
        <div className={ styles.imgCodeContainer }>
          <Image src={ code } layout='responsive'/>
        </div>
        <div className={ styles.textCodeContainer}>
          <h3>Self Taught.</h3>
          <p>Self taught as I had to split my time between working, studying and a young family.</p>
          <div className={ styles.mediaList }>
            <h5>Media used</h5>
            <ul>
              <span 
                className={ spanOpen ? styles.spanOpen : styles.spanClosed }
                onClick={ spanOpen ? () => setSpanOpen(!spanOpen) : undefined}
              >
                {'>'}
              </span>
              { media.map((mediaItem, index) => <ListItem key={ index } mediaItem={ mediaItem} index={ index } spanOpen={ spanOpen }/>) }
            </ul>
          </div>
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
              style={ sectionOpen ? { cursor: 'url(../public/images/arrowUp.png), pointer' } : { cursor: 'url(../public/images/arrowDown.png), pointer' }}
        >
              Code
        </div>
        {/* --------------------------------- */}
      </section>
{/* ----------------------------------My Code Open & close with code button--------------------------------------- */}
      <section className={ styles.sectionCode }>
        <div className={ sectionOpen ? styles.codeContainer : [ styles.codeContainer, styles.codeContainerClosed ].join(' ') }>
              { myCode.map(code => <Code code={ code } key={ code.id }/>) }
        </div>
      </section>
{/* ----------------------------------absolute image overlay--------------------------------------- */}
<div className={ styles.parallax }>
  {/* ----------------------------------Non tech history--------------------------------------- */}
        <section className={ styles.nonTechSection }>
          { pastTrades.map(past => <Past key={ past.id } past={ past } />) }
        </section>   
</div>
    </>
  )
}

export default Skills
