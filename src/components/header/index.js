import React from 'react';

import './_header.scss';

const Header = () =>
  (<header className="header">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">
        <img src="/images/logo.svg" /> 
        <p>FirstStep</p>
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item active">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Invest</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Price</a>
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
  </header>);

export default Header;
