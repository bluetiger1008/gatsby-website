import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="wrapper">
      <div className="inner-wrapper">
        <div className="row">
          <div className="col-md-3">
            <a className="navbar-brand">
              <img src="/images/logo.svg" /> 
              <p>FirstStep</p>
            </a>
            <div className="download-links">
              <a className="btn-download appstore"><img src="/images/app-store-button.png" /></a>
              <a className="btn-download playstore"><img src="/images/play-store-button.png" /></a>
            </div>
            <div className="social-shares d-flex justify-content-between">
              <a><img src="/images/icon-facebook.svg" /></a>
              <a><img src="/images/icon-twitter.svg" /></a>
              <a><img src="/images/icon-linkedin.svg" /></a>
              <a><img src="/images/icon-m.svg" /></a>
            </div>
          </div>
          <div className="col-md-3">
            <h4>Legal</h4>
            <ul>
              <li><a>Terms and conditions</a></li>
              <li><a>Privacy policy</a></li>
              <li><a>Product disclosure statement</a></li>
              <li><a>Investment option booklet</a></li>
              <li><a>Addtional information booklet</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Company</h4>
            <ul>
              <li><a>About us</a></li>
              <li><a>Pricing</a></li>
              <li><a>Blog</a></li>
              <li><a>Uni</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Where to find us</h4>
            <p className="address">Level 1, 333 Exhibition St Melbourne VIC 3000 Australia</p>
            <p className="contact">Call us: <span>03-8566-7771</span></p>
            <p className="contact">Mail at: <span>hello@firststep.com</span></p>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-12">
            <p className="copyright">FirstStep is licensed to operate in Australia and only Australian citizens and residents can purchase or sell securities through its application. FirstStep is owned and operated by FirstStep Investments Australia Pty Ltd (ACN 612 834 947) - Authorised Representative of Primestock Securities Ltd, AFSL 239180. Any information contained in this website is general information only and has been prepared without considering your objectives, financial situation or needs. You should not rely on any information contained in this website and before making any investment decision, we recommend that you consider the appropriateness of its content having regard to your needs and financial situation. You should consider seek appropriate financial, taxation and legal advice prior to making any decision. The relevant Product Disclosure Statement (PDS) should also be obtained and considered before making a decision about any financial product.</p>
            <p className="reserved-date">© FirstStep 2018. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;
