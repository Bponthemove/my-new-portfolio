import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import styles from '../../styles/Footer.module.css';
import usePortfolioContext from '../hooks/usePortfoliocontext';
import { LinksFooter } from './LinksFooter';
import { ScrollIndicator } from './ScrollIndicator';

export const Footer = () => {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const { bottomRef } = usePortfolioContext();

//email me through emailjs. Still have to set up netlify functions to hide credentials
  const handleInput = (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    
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
    };

  return (
    <>
      <ScrollIndicator/>
      <footer className={ styles.footer }>
        <div className={ styles.contact }>
          <p>Feel free to leave me a message<br/>for support, feedback or some more info!</p>
          <form onSubmit={ e => handleInput(e) } id='form' >
            <div className={ styles.names }>
              <input 
                type='name' 
                maxLength={ 256 } 
                name='name' 
                aria-label='Name' 
                placeholder='Name' 
                id='name' 
                value={ name } 
                onChange={ e => setName(e.currentTarget.value)} required
              />
              <input 
                type='email' 
                maxLength={ 256 } 
                name='email' 
                aria-label='Email' 
                placeholder='Email' 
                id='Email' 
                value={ email } 
                onChange={ e => setEmail(e.currentTarget.value)} required
              />
              <textarea 
                name='message' 
                aria-label='Message' 
                id='Message' 
                placeholder='Your message' 
                rows={6} 
                value={ message } 
                onChange={ e => setMessage(e.currentTarget.value)} required
              />
            </div>
            <input type='submit' value='Contact me' title='Send' id={ styles.ContactBtn } />
          </form>
        </div>
        <LinksFooter/>
        <p className={ styles.copyright } ref={ bottomRef }>
          &copy; Bponthemove @ 2022
        </p>
      </footer>
    </>
  );
};
