import { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ListItem } from '../dist/components/ListItem'
import { Past } from '../dist/components/Past'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGit, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiMongodb, SiJquery, SiJavascript} from 'react-icons/si'
import styles from '../styles/Skills.module.scss'
import { personality, media, pastTrades } from '../dist/data'
import code from '../public/images/code.jpg'
console.log(pastTrades)
const Skills: NextPage = () => {
  const [random, setRandom] = useState<number>(10)
  const [spanOpen, setSpanOpen] = useState<boolean>(false)

  useEffect(() => {
    const skills: ReturnType<typeof setInterval> = setInterval(() => {
      setRandom(Math.floor(Math.random() * 8))
    }, 2000)
    return () => clearInterval(skills)
  }, [])

  useEffect(() => {
    if (spanOpen) return
    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      setSpanOpen(true)
    }, 1000)
  }, [spanOpen])

  return (
    <>
{/* ----------------------------------top section--------------------------------------- */}
      <section className={ styles.sectionOne }>
        <div className={ styles.imgCodeContainer }>
          <Image src={ code } layout='responsive'/>
        </div>
        <div className={ styles.textCodeContainer}>
          <h3>Self Taught.</h3>
          <p>Self taught as I had to split my time between working, studying and family.</p>
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
{/* ----------------------------------ticker--------------------------------------- */}
      <div className={ styles.ticker }>
        <div className={ styles.innerTicker }>
          <FaHtml5/><FaCss3Alt/><FaSass/><FaReact/><FaGit/><FaNodeJs/><FaAws/><SiNextdotjs/><SiExpress/><SiMongodb/><SiJquery/><SiJavascript/>
        </div>
      </div>
{/* ----------------------------------personal trades--------------------------------------- */}
      <section className={ styles.personality }>
        <div className={ styles.textPersonality }>
          <p>I am an inquisitive and caring person, who likes to succeed in what he is doing. A teamplayer as well as an independent professional.</p>
          <p>Having worked in multiple industries with very different people, I have been exposed to a wide range of characters, accompanied by a wide range of characteristics.</p>
          <p>This has made me into a person who is independent, confident and very aware of its surroundings.</p>
        </div>
        <div className={ styles.bottomPersonality }>
          { personality.map((skill: string, index: number) => 
            <p key={ index } className={ index === random ? styles.pActive : undefined }>{ skill }</p>
          )}
        </div>
      </section>
{/* ----------------------------------overlay container--------------------------------------- */}
      <div className={ styles.overlay }>

      </div>
{/* ----------------------------------Non tech history--------------------------------------- */}
      <section className={ styles.nonTechSection }>
        { pastTrades.map((past, index) => 
          <Past key={ index } past={ past } index={ index }/>
        )}
      </section>    
    </>
  )
}

export default Skills
