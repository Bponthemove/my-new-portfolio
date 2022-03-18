import { slide as Menu } from 'react-burger-menu'
import React from "react";
import './burgermenu.css';

class burger extends React.Component {
    showSettings (event: React.FormEvent) {
        event.preventDefault();

      }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (

      <Menu right width={ '100%' } disableAutoFocus >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contribute" className="menu-item" href="/contribute">Contribute</a>
        <a id="download" className="menu-item" href="/download">Download</a>
      </Menu>
    );
  }
}
export default burger