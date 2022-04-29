import React from 'react';
import styles from '../../styles/Home.module.css';

export const H1 = () => {

    return (
        <div className={ styles.IamBramContainer }>
            <h1 className={ [styles.Iam, styles.IamAnimated].join(' ') }>
            Iam
            </h1>
            <h1 className={ [styles.Bram, styles.BramAnimated].join(' ') }>
            Bram
            </h1>
        </div>
    );
};
