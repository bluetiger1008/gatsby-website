/* global graphql */

import React from 'react';
import AOS from 'aos'; 

import Features from '../components/features';
import HowTo from '../components/how-to';
import './_about.scss';

class AboutPage extends React.Component { 
  constructor(props, context) { 
    super(props, context); 
    AOS.init(); 
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  render() {
    return (
      <main>
        <div className="about-page">
          <section className="first">
            <div className="wrapper">
              <div className="inner-wrapper">
                <div className="text-center">
                  <h2>Live a happier financial life</h2>
                  <p>We are giving all Australians access to fiancial education, technology and services</p>
                </div>
                <div className="feature-icons">
                  <img src="images/icon-rising.svg" className="feature-icon rising"/>
                  <img src="images/icon-search.svg" className="feature-icon search"/>
                  <img src="images/icon-floppy.svg" className="feature-icon floppy"/>
                  <img src="images/icon-shield.svg" className="feature-icon shield"/>
                </div>
              </div>
            </div>
          </section>
          <section className="team">
            <div className="wrapper">
              <div className="inner-wrapper">
                <div className="team-title">
                  <h2>Team</h2>
                  <p>Our team together to drive financial change for all Australians. We are investment experts, programmers, analysts, strategists with a drive to change people’s lives through Firststep</p>
                </div>
                <div className="row members">
                  <div className="col-md-6 member">
                    <div className="member-photo">
                      <img src="images/man.png" className="img-photo" />
                      <img src="images/triangle.png" className="bg-photo" />
                    </div>
                    <div className="member-info">
                      <h3>Garreth Edwards, CEO</h3>
                      <p>Experienced entrepreneur, developer and investor. Loves building stuff, Turns lemons into lemonade</p>
                    </div>
                  </div>
                  <div className="col-md-6 member">
                    <div className="member-photo">
                      <img src="images/man.png" className="img-photo" />
                      <img src="images/triangle.png" className="bg-photo" />
                    </div>
                    <div className="member-info">
                      <h3>Garreth Edwards, CEO</h3>
                      <p>Experienced entrepreneur, developer and investor. Loves building stuff, Turns lemons into lemonade</p>
                    </div>
                  </div>
                  <div className="col-md-6 member">
                    <div className="member-photo">
                      <img src="images/man.png" className="img-photo" />
                      <img src="images/triangle.png" className="bg-photo" />
                    </div>
                    <div className="member-info">
                      <h3>Garreth Edwards, CEO</h3>
                      <p>Experienced entrepreneur, developer and investor. Loves building stuff, Turns lemons into lemonade</p>
                    </div>
                  </div>
                  <div className="col-md-6 member">
                    <div className="member-photo">
                      <img src="images/man.png" className="img-photo" />
                      <img src="images/triangle.png" className="bg-photo" />
                    </div>
                    <div className="member-info">
                      <h3>Garreth Edwards, CEO</h3>
                      <p>Experienced entrepreneur, developer and investor. Loves building stuff, Turns lemons into lemonade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="how-work">
            <div className="wrapper">
              <div className="inner-wrapper">
                <h2>How we work</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="number"><p>1</p></div>
                    <div className="description">
                      <h4>Stronger with every thread</h4>
                      <p>We believe our team’s success is driven by how well we share, learn and iterate together</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="number"><p>2</p></div>
                    <div className="description">
                      <h4>Candor and compassion</h4>
                      <p>We strive to share what’s on our minds candidly and with empathy-with our peers, managers and partners </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="number"><p>3</p></div>
                    <div className="description">
                      <h4>Empowered and accountable</h4>
                      <p>We empower each other to take ownership, while holding each other accountable for seeing work through</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="number"><p>4</p></div>
                    <div className="description">
                      <h4>The customer decides</h4>
                      <p>We bring our customers perspective into every meeting, every discussion, and every decision we make</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="number"><p>5</p></div>
                    <div className="description">
                      <h4>Nurture trust</h4>
                      <p>We foster a safe and inclusive environment for our team to do the best work of our lives, while vigilantly safeguarding the most trusted data in our customers lives </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default AboutPage;
