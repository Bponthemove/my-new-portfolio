import React from 'react';
import Image from 'next/image';
//--types--//
import { ICodeProps } from '../types';
//--icons--//
import {SiNextdotjs, SiJavascript, SiReact, SiTypescript } from 'react-icons/si'
//--styles--//
import styles from '../../styles/Projects.module.css';

export const Code = ({ code, setClickedId }: ICodeProps) => {
  const {id, img, icon} = code;
  console.log(id)
  return (
    <div 
      className={ styles.tile }
      onClick={ () => setClickedId(id) }
    >
      <Image 
        src={ img } 
        layout='fill' 
        objectFit='cover' 
        alt={ img }  
        priority={ id < 4 ? true : false }
        placeholder='blur'
        blurDataURL='/images/placeholderCode.png'
      />
      <div className={styles.iconContainer}>
        {icon.map(icon => (
          <div className={styles.icon} key={id}>
            { icon === '1' ? <SiJavascript size={60}/>
              : icon === '2' ? <SiTypescript size={60}/>
              : icon === '3' ? <SiReact size={60}/>
              : <SiNextdotjs size={60}/>
            }
          </div>
        ))}
      </div>
    </div>
  );
};
