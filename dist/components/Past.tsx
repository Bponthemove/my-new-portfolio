import React from 'react';
import Image from 'next/image';
import { IPastProps } from '../types';
import styles from '../../styles/Skills.module.css';

export const Past = ({ past }: IPastProps) => {

    return (
        <div className={ styles.pastContainer }>
            <div className={ styles.pastImgContainer }>
                <Image src={ past.img } width='100%' height='100%' layout='responsive' objectFit='contain' alt={ past.img }/>
            </div>
            <div className={ styles.spacer }/>
            <div className={ styles.pastTextContainer }>
                <p>{ past.textOne }</p>
                <br/>
                <p>{ past.textTwo }</p>
            </div>
        </div>
    );
};
