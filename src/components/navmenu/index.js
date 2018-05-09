import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import './_navmenu.scss';

class NavMenu extends React.Component {
  showSettings = (event) =>{
    event.preventDefault();
  }

  render() {
    return (
      <Menu right width={ '100%' }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Invest</a>
        <a id="price" className="menu-item" href="/pricing">Price</a>
        <a id="faq" className="menu-item" href="/faq">FAQ</a>
        <a id="download" className="menu-item" href="">Download</a>
      </Menu>
    );
  }
}

export default NavMenu;
