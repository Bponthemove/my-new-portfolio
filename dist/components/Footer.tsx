import React, { useState, useEffect, useReducer } from 'react'
import emailjs from 'emailjs-com'
import { FaGithub, FaChevronRight, FaLinkedin, FaChevronLeft, FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'
import styles from '../../styles/Footer.module.css'
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

const ACTIONS = {
  FIRST: 'first',
  SECOND: 'second',
  THIRD: 'third',
  RESET: 'reset'
}

type State = {
  first: string
  second: string
  third: string
}

type Action = {
  type: string
}

function arrowReducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.FIRST: {
      return {
        first: 'true',
        second: 'false',
        third: 'false'
      }
    }
    case ACTIONS.SECOND: {
      return {
        first: 'false',
        second: 'true',
        third: 'false'
      }
    }
    case ACTIONS.THIRD: {
      return {
        first: 'false',
        second: 'false',
        third: 'true'
      }
    }
    case ACTIONS.RESET: {
      return {
        first: 'true',
        second: 'true',
        third: 'true'
      }
    }
    default: 
      return state
  }
}

export const Footer = () => {
  const [state, dispatch] = useReducer(arrowReducer, {
    first: 'false',
    second: 'false',
    third: 'false'
  })
  const [hover, setHover] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [toTop, setToTop] = useState<boolean>(false)

  const { bottomRef, headerRef } = usePortfolioContext()
  const { current } = headerRef

//arrows go red every 1 sec
  useEffect(() => {
    let arrows: ReturnType<typeof setInterval>
    if (!hover) {
      let counter: number = 1
      arrows = setInterval(() => {
        if (counter < 3) counter++
        else counter = 1
        if (counter === 1) dispatch({ type: ACTIONS.FIRST})
        if (counter === 2) dispatch({ type: ACTIONS.SECOND})
        if (counter === 3) dispatch({ type: ACTIONS.THIRD})
      }, 1000)
    } else {
      dispatch({ type: ACTIONS.RESET })
    }
    return () => clearInterval(arrows) 
  }, [hover])

//arrow to go back to top
  useEffect(() => {
    if (toTop && current) {
      current.scrollIntoView({behavior: 'smooth'})
      setToTop(!toTop)
    }
  }, [toTop])

//email me through emailjs. Still have to set up netlify functions to hide credentials
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
            <input type='name' maxLength={ 256 } name='name' aria-label='Name' placeholder='Name' id='name' value={ name } onChange={ e => setName(e.currentTarget.value)} required/>
            <input type='email' maxLength={ 256 } name='email' aria-label='Email' placeholder='Email' id='Email' value={ email } onChange={ e => setEmail(e.currentTarget.value)} required/>
            <textarea name='message' aria-label='Message' id='Message' placeholder='Your message' rows={6} value={ message } onChange={ e => setMessage(e.currentTarget.value)} required/>
          </div>
          <input type='submit' value='Contact me' title='Send' id={ styles.ContactBtn } />
        </form>
      </div>
      <div className={ styles.bottomContainer }>
            <div>
              {/* use styled components here to make arrows light up in sequence without hover and active in red on hover */}
              <a href="https://www.linkedin.com/in/bram-peter-van-zalk-6b1401215" target='_blank'>
                <LinkedIn title='LinkedIn Icon' onMouseEnter={ () => setHover(!hover) } onMouseLeave={ () => setHover(!hover) }/>
              </a>
              <ArrowLeft active={ state.third }/>
              <ArrowLeft active={ state.second }/>
              <ArrowLeft active={ state.first }/>
            </div>
            <div>
              <ArrowRight active={ state.first }/>
              <ArrowRight active={ state.second }/>
              <ArrowRight active={ state.third }/>
              <a href="https://github.com/Bponthemove" target='_blank'>
                <GitHub title='Github Icon' onMouseEnter={ () => setHover(!hover) } onMouseLeave={ () => setHover(!hover) }/>
              </a>
            </div>
      </div>
      <p className={ styles.copyright } ref={ bottomRef }>
        &copy; Bponthemove @ 2022
      </p>
      <button onClick={ () => setToTop(!toTop) } aria-label='button to scroll to the top'>
        <ArrowTop/>
      </button>
    </footer>
  )
}
