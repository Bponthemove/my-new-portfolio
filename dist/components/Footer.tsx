import React, { useState, useEffect } from 'react'
import { FaGithub, FaChevronRight, FaLinkedin, FaChevronLeft, FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'
import styles from '../../styles/Footer.module.scss'

interface ArrowProps {
  active: string
}

interface IconProps {
  className?: string;
}

const iconStyle = `
  transform: scale(3); 
  margin: 0em 2em; 
  cursor: pointer;
  
  @media (min-width: 55em) {
    transform: scale(5);
    margin: 0em 4em;
  }
`
const LinkedIn = styled(FaLinkedin)<IconProps>`${iconStyle}`
const GitHub = styled(FaGithub)<IconProps>`${iconStyle}`
const ArrowLeft = styled(FaChevronLeft)<ArrowProps>`
  transform: ${ props => props.active === 'false' ? 'scale(3)' : 'scale(3.8)' }; 
  margin: 0.2em;
  color: ${ props => props.active === 'false' ? 'black' : '#fe5f55' }
`
const ArrowRight = styled(FaChevronRight)<ArrowProps>`
  transform: ${ props => props.active === 'false' ? 'scale(3)' : 'scale(3.8)' }; 
  margin: 0.2em;
  color: ${ props => props.active === 'false' ? 'black' : '#fe5f55' }
`
const ArrowTop = styled(FaArrowUp)`
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`

export const Footer = () => {
  const [hover, setHover] = useState<boolean>(false)
  const [first, setFirst] = useState<string>('false')
  const [second, setSecond] = useState<string>('false')
  const [third, setThird] = useState<string>('false')
  
  useEffect(() => {
    let arrows: ReturnType<typeof setInterval>
    if (!hover) {
      let counter: number = 1
      arrows = setInterval(() => {
        if (counter < 3) counter++
        else counter = 1
        if (counter === 1) {
          setFirst('true')
          setThird('false')
          return
        }
        if (counter === 2) {
          setFirst('false')
          setSecond('true')
          return
        }
        if (counter === 3) {
          setSecond('false')
          setThird('true')
          return
        }
      }, 1000)
    } else {
      setFirst('true')
      setSecond('true')
      setThird('true')
    }
    return () => clearInterval(arrows)   
  }, [hover])

  return (
    
      <footer className={ styles.footer } id='footer'>
        <div className={ styles.contact }>
          <p>Feel free to leave me a message<br/>of support or for some more info!</p>
          <form action='mailto:bpvanzalk@hotmail.com' method='post' encType='text/plain'>
            <div className={ styles.names }>
              <input type='text' maxLength={ 256 } name='First-Name' placeholder='First Name' id='First-Name' required/>
              <input type='text' maxLength={ 256 } name='Last-Name' placeholder='Last Name' id='Last-Name' required/>
              <input type='email' maxLength={ 256 } name='Email' placeholder='Email' id='Email'/>
              <textarea name='Message' id='Message' placeholder='Your message' rows={6} required/>
            </div>
            <input type='submit' value='Contact me' id={ styles.ContactBtn }/>
          </form>
        </div>
        <div className={ styles.bottomContainer }>
              <div>
                {/* use styled components here to make arrows light up in sequence without hover and active in red on hover */}
                <LinkedIn onMouseEnter={ () => setHover(!hover) } onMouseLeave={ () => setHover(!hover) }/>
                <ArrowLeft active={ third }/>
                <ArrowLeft active={ second }/>
                <ArrowLeft active={ first }/>
              </div>
              <div>
                <ArrowRight active={ first }/>
                <ArrowRight active={ second }/>
                <ArrowRight active={ third }/>
                <GitHub onMouseEnter={ () => setHover(!hover) } onMouseLeave={ () => setHover(!hover) }/>
              </div>
        </div>
        <p className={ styles.copyright }>
          &copy; Bponthemove @ 2022
        </p>
        <a href="#top">
          <ArrowTop/>
        </a>
      </footer>
  )
}
