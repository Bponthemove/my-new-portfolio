import React from 'react';
import { ICertificate } from '../types';

export const Certificate = ({ certificate }: ICertificate) => {
    const { url, title, company, certId } = certificate;

  return (
      <a href={ url } target='_blank' rel="noreferrer">
        <li id={ certId } >
            <h4>{ title }</h4>
            <h6>{ company }</h6>
        </li>
      </a>
  );
};
