import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiJquery, SiJavascript} from 'react-icons/si';
import styles from '../../styles/Skills.module.css';

export const SkillsTicker = () => {
  return (
    <div className={ styles.ticker }>
        <div className={ styles.innerTicker }>
            <FaHtml5/><FaCss3Alt/><FaSass/><FaReact/><FaGit/><FaNodeJs/><SiNextdotjs/><SiExpress/><SiMongodb/><SiJquery/><SiJavascript/>
        </div>
    </div>
  );
};
