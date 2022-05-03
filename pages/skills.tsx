import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
  //--components--//
import { Certificate } from '../dist/components/Certificate';
import { ListItem } from '../dist/components/ListItem';
import { PersonalSkills } from '../dist/components/PersonalSkills';
import { Stickman } from '../dist/components/Stickman';
//--custom hooks--//
import usePortfolioContext from '../dist/hooks/usePortfoliocontext';
//--styles--//
import styles from '../styles/Skills.module.css';
//--types--//
import { IPastProps } from '../dist/types';
  //--data--//
import { media, pastTrades, certificates } from '../dist/data';
  //--images--//
import code from '../public/images/code.jpg';
import graduation from '../public/images/graduation.jpg';
import stickPoint from '../public/images/stickman-pointing-right.png';
//--dynamic imports to improve first load--//
const DynamicPast = dynamic<IPastProps>(() => import('../dist/components/Past').then(mod => mod.Past));
const DynamicSkillsTicker = dynamic<Record<string, never>>(() => import('../dist/components/SkillsTicker').then(mod => mod.SkillsTicker));

const Skills: NextPage = () => {

  const [spanOpen, setSpanOpen] = useState<boolean>(false);
  const { desktop } = usePortfolioContext();

  
{/* ----------------------------------rotate > after 1sec of loading--------------------------------------- */}
  useEffect(() => {
    if (spanOpen) return;
    const timerOne: ReturnType<typeof setTimeout> = setTimeout(() => {
      setSpanOpen(true);
    }, 1000);
    return () => clearTimeout(timerOne);
  }, [spanOpen]);


  return (
    <>  
   {/* ----------------------------------top section - Media used----------------------------------- */}
      <section className={ styles.sectionOne }>
        { desktop && <div className={ styles.imagesContainer }>
            <div className={ styles.imgCodeContainer }>
                <Image src={ code } layout='responsive' alt='Image with lines of code' quality='90' placeholder='blur'/>
            </div>
            <div className={ styles.stickPointContainer }>
                <Image src={ stickPoint } width='100%' height='100%' layout='responsive' objectFit='contain' alt='stickman pointing'/>
            </div>
          </div>
        }
        <div className={ styles.mediaContainer }>
        { !desktop && <div className={ styles.imgCodeContainer }>
            <Image src={ code } layout='responsive' alt='Image with lines of code' quality='90' placeholder='blur'/>
          </div> 
        }
          <div className={ styles.textCodeContainer}>
            <h3>Self Taught.</h3>
            <p>Self taught as I have to split my time between working, studying and a young family.</p>
            <div className={ styles.mediaList }>
              <h5>Media used</h5>
              <ul>
                <span className={ spanOpen ? styles.spanOpen : styles.spanClosed }>
                  {'>'}
                </span>
                { media.map((mediaItem, index) => <ListItem key={ index } mediaItem={ mediaItem } index={ index } spanOpen={ spanOpen }/>) }
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* ----------------------------------scrollAnimation--------------------------------------- */}
      <section>
        <Stickman/>
      </section>
{/* ----------------------------------Certificates--------------------------------------- */}
      <section className={ styles.certSection }>
        <div className={ styles.graduationContainer }>
          <Image src={ graduation } objectFit='cover' height={ '100%' } width={ '100%' } layout='responsive' alt='graduates throwing their hats' quality='90' placeholder='blur'/>
        </div>
        <div className={ styles.certificatesContainer }>
          <ul>
            { certificates.map(certificate => <Certificate key={ certificate.certId } certificate={ certificate }/>) }
          </ul>
        </div>
      </section>
{/* ----------------------------------ticker - skills--------------------------------------- */}
      <DynamicSkillsTicker/>
{/* ----------------------------------personal skills--------------------------------------- */}
      <section className={ styles.personality }>
        <div className={ styles.textPersonality }>
          <p>I am an inquisitive and caring person, who likes to succeed in what he is doing. A teamplayer as well as an independent professional.</p>
          <p>Having worked in multiple industries with very different people, I have been exposed to a wide range of characters, accompanied by a wide range of characteristics.</p>
          <p>This has made me into a person who is independent, confident and who is always learning new skills.</p>
        </div>
        <PersonalSkills/>
{/* --------overlay container - Code button-------- */}
        <Link href="/projects">
          <a className={ styles.codeBtn }>Code</a>
        </Link>               
        {/* ----------------------------------------------- */}
      </section>
{/* ----------------------------------absolute image overlay--------------------------------------- */}
      <div className={ styles.parallax } title='beautiful landscape'>
  {/* ----------------------------------Non tech history--------------------------------------- */}
        <section className={ styles.nonTechSection }>
          { pastTrades.map(past => <DynamicPast key={ past.id } past={ past } />) }
        </section>   
      </div>
    </>
  );
};

export default Skills;
