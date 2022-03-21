import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import emailjs from 'emailjs-com'
import { FaGithub, FaChevronRight, FaLinkedin, FaChevronLeft, FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'
import styles from '../../styles/Footer.module.scss'
import usePortfolioContext from '../hooks/usePortfoliocontext'

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
  transition: 0.2s;
  
  :hover{
    transform: scale(3.20)
  }

  @media (min-width: 55em) {
    transform: scale(5);
    margin: 0em 4em;
    transition: 0.2s;

    :hover{
      transform: scale(5.2)
    }
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
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [toTop, setToTop] = useState<boolean>(false)

  const { bottomRef, headerRef } = usePortfolioContext()
  const { current } = headerRef

  useEffect(() => {
    let arrows: ReturnType<typeof setInterval>
    if (!hover) {
      let counter: number = 1
      arrows = setInterval(() => {
        if (counter < 3) counter++
        else counter = 1
        if (counter === 1) {
          setFirst('true')
          setSecond('false')
          setThird('false')
          return
        }
        if (counter === 2) {
          setFirst('false')
          setSecond('true')
          setThird('false')
          return
        }
        if (counter === 3) {
          setFirst('false')
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

  useEffect(() => {
    if (toTop && current) {
      current.scrollIntoView({behavior: 'smooth'})
      setToTop(!toTop)
    }
  }, [toTop])

  const handleInput = (e: React.FormEvent<HTMLFormElement> ) => {
    console.log(e.currentTarget.message.value)
    e.preventDefault()
    
    emailjs
      .sendForm(
        "service_bps9mac",
        "template_bejf8ua",
        e.currentTarget,
        'gVMc6hqzE6iCyCUFO'
      )
      .then(res => {
          console.log(res.status)
          alert("Your email has been sent")
        },
      )
      .catch(err => {
          console.log(err.status)
          alert("FAILED... Please try again")
        }
      )
      .finally(() => {
        setName('')
        setEmail('')
        setMessage('')
      })
    }

  return (
    
      <footer className={ styles.footer }>
        <div className={ styles.contact }>
          <p>Feel free to leave me a message<br/>for support, feedback or some more info!</p>
          <form onSubmit={ e => handleInput(e) } id='form' >
            <div className={ styles.names }>
              <input type='name' maxLength={ 256 } name='name' placeholder='Name' id='name' value={ name } onChange={ e => setName(e.currentTarget.value)} required/>
              <input type='email' maxLength={ 256 } name='email' placeholder='Email' id='Email' value={ email } onChange={ e => setEmail(e.currentTarget.value)} required/>
              <textarea name='message' id='Message' placeholder='Your message' rows={6} value={ message } onChange={ e => setMessage(e.currentTarget.value)} required/>
            </div>
            <input type='submit' value='Contact me' id={ styles.ContactBtn } />
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
        <p className={ styles.copyright } ref={ bottomRef }>
          &copy; Bponthemove @ 2022
        </p>
        <a onClick={ () => setToTop(!toTop) }>
          <ArrowTop/>
        </a>
      </footer>
  )
}
