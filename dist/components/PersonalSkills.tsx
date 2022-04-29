import React, { useEffect, useState } from 'react';
import { personality } from '../../dist/data';
import styles from '../../styles/Skills.module.css';

export const PersonalSkills = () => {
    const [random, setRandom] = useState<number>(10);

    {/* ----------------------------random to randomly highlight skill in section personal skills---------------------------------- */}
  useEffect(() => {
    const skills: ReturnType<typeof setInterval> = setInterval(() => {
      setRandom(Math.floor(Math.random() * 8))
    }, 2000)
    return () => clearInterval(skills)
  }, []);

  return (
    <div className={ styles.bottomPersonality }>
          { personality.map((skill: string, index: number) => 
            <p key={ index } className={ index === random ? styles.pActive : undefined }>{ skill }</p>
          )}
    </div>
  );
};
