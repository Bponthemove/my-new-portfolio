import React, { useReducer, useState, useEffect } from 'react'
import { FaGithub, FaChevronRight, FaLinkedin, FaChevronLeft } from 'react-icons/fa'
import styled from 'styled-components'
import styles from '../../styles/Footer.module.css'
import { IconProps, ArrowProps, State, Action } from '../types'

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

const ACTIONS = {
    FIRST: 'first',
    SECOND: 'second',
    THIRD: 'third',
    RESET: 'reset'
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

export const LinksFooter = () => {
    const [state, dispatch] = useReducer(arrowReducer, {
        first: 'false',
        second: 'false',
        third: 'false'
      })
      const [hover, setHover] = useState<boolean>(false)

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

  return (
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
  )
}
