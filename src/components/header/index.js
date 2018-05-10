import React from 'react';
import { withPrefix } from 'gatsby-link';

import './_header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
              <img src={withPrefix('/images/logo.png')} /> 
              <p>FirstStep</p>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item active">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Invest</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">Price</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link download" href="#">
                    <button type="button" className="btn btn-download">Download</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
