import React, {useState, useEffect} from 'react'
import styles from '../../styles/Home.module.css'

export const H1 = () => {
    const [h1Animate, setH1Animate] = useState(false)

    useEffect(() => {
        const animation: ReturnType<typeof setTimeout> = setTimeout(() => {
          setH1Animate(true)
        }, 500)
      
        return () => clearTimeout(animation)
    }, [])

    return (
        <div className={ styles.IamBramContainer }>
            <h1 className={ h1Animate ? [styles.Iam, styles.IamAnimated].join(' ') : styles.Iam }>
            Iam
            </h1>
            <h1 className={ h1Animate ? [styles.Bram, styles.BramAnimated].join(' ') : styles.Bram }>
            Bram
            </h1>
        </div>
    )
}
