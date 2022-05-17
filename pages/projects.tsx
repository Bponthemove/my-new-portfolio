import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import dynamic from 'next/dynamic';
//--icons--//
import { FaRegWindowClose, FaGithub, FaRegCaretSquareRight } from 'react-icons/fa'
//--data--//
import { myCode } from '../dist/data';
//--types--//
import { ICodeProps } from '../dist/types';
//--styles--//
import styles from '../styles/Projects.module.css';
import usePortfolioContext from "../dist/hooks/usePortfoliocontext";

const DynamicCode = dynamic<ICodeProps>(() => import('../dist/components/Code').then(mod => mod.Code));

const Projects: NextPage = () => {
    const { clickedId, setClickedId } = usePortfolioContext();
    const [slideOpen, setSlideOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!clickedId) return;
        const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
            setSlideOpen(true)
        }, 300);
        return () => clearTimeout(timer);
    }, [clickedId]);

    const closeHandler = () => {
        setClickedId(null);
        setSlideOpen(false);
    };

    return (
        <div className={ styles.wrapper }>
            <section className={ styles.header }>
                <h1>My Projects</h1>
                <h3>Various projects either built for earning certain certifications or to practise.</h3>
                <p>
                    Main tools used are React(some with Next), JavaScript/TypeScript, CSS with jQuery or Sass. Some focus on calling API‘s, I like using Axios for this. Others focus on React and its component structure. Some have some kind of back end to practise with express and database coding. Some are served on Heroku and take some time to load as Heroku puts apps to sleep after a time of inactivity. Others are on Netlify.
                </p>
                <div className={ styles.portfolio }>
                    <p>
                        This portfolio site is obviously also part of my projects. Using Next.js, TypeScript, Sass and Styled Components. 
                    </p>
                    <a href='https://github.com/Bponthemove/my-new-portfolio' target='_blank' rel="noreferrer">
                        <FaGithub size={50}/>
                    </a> 
                </div>
                <p>
                    Currently I am building a website for a rope access company and doing some small web dev volunteering for a small charity in Africa called HEKIMA.
                </p>
            </section>
            <section className={ styles.outerContainer }>
                <div className={ styles.sectionCode }>
                    <div className={ styles.codeContainer }>
                        { myCode.map(code => <DynamicCode code={ code } setClickedId={ setClickedId } key={ code.id }/>) }
                    </div>
                </div>
            </section>
            <div 
                className={ clickedId ? [styles.overlay, styles.overlayVisible].join(' ') : styles.overlay } 
                //turn scroll off when clickedId
                >
                { clickedId && 
                <>
                    <Image src={ myCode[clickedId - 1].img } layout='fill' objectFit='cover' alt={myCode[clickedId - 1].img}></Image>
                    <div 
                        className={ styles.close }
                        onClick = { () => closeHandler() }
                    > 
                        <FaRegWindowClose size={100}/>
                    </div>
                    <div className={ styles.modalText }>
                        <div className={ slideOpen ? [styles.slide, styles.slideOpen].join(' ') : styles.slide }/>
                        <div className={ styles.modalInner }>
                            <p className={ styles.text }>
                                { myCode[clickedId - 1].text }
                            </p>
                            <p className={ styles.tags }>
                                { myCode[clickedId - 1].tags }
                            </p>
                            <div className={ styles.linkContainer }>
                                <a href={ myCode[clickedId - 1].link } target='_blank' rel="noreferrer">
                                    <FaGithub size={50}/>
                                </a>
                                <a href={ myCode[clickedId - 1].live } target='_blank' rel="noreferrer">
                                    <FaRegCaretSquareRight size={50}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
                }

            </div>
        </div>
    );
};

export default Projects