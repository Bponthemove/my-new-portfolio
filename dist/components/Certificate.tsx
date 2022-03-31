import React from 'react'
import styles from '../../styles/Skills.module.css'
import usePortfolioContext from '../hooks/usePortfoliocontext'

interface ICertificate {
    certificate: {
        url: string,
        title: string,
        company: string,
        id: number
    }
}

const Certificate = ({ certificate }: ICertificate) => {
    const { url, title, company, id } = certificate
    const { desktop } = usePortfolioContext()

  return (
      <>
        { !desktop &&
            <li>{ title }</li>        
        }
        { desktop && 
            <li>
                <h4>{ title }</h4>
                <h6>{ company }</h6>
            </li>
        }
      </>
  )
}

export default Certificate