import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconProps } from '../types';
import styled from 'styled-components';

interface IIconComponentProps {
  footerLink: string
  toggle: React.DispatchWithoutAction
};

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

const LinkedIn = styled(FaLinkedin)<IconProps>`${iconStyle}`;
const GitHub = styled(FaGithub)<IconProps>`${iconStyle}`;

export const IconComponent = ({ footerLink, toggle }: IIconComponentProps) => {
  
  return ( footerLink === 'linkedin' ?
    <LinkedIn title='LinkedIn Icon' onMouseEnter={ toggle } onMouseLeave={ toggle }/>
    :
    <GitHub title='Github Icon' onMouseEnter={ toggle } onMouseLeave={ toggle }/>
  );
};
