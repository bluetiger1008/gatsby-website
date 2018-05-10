/* global graphql */

import React from 'react';
import AOS from 'aos'; 
import { withPrefix } from 'gatsby-link';

import Features from '../components/features';
import HowTo from '../components/how-to';
import './_pricing.scss';

class PricingPage extends React.Component { 
  componentDidMount() { 
    const isBrowser = typeof window !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;
    this.aos = AOS;
    this.aos.init();
  }

  componentDidUpdate (){ 
    this.aos.refresh();
  }

  render() {
    return (
      <main>
        <div className="pricing-page">
          <section className="simple-pricing" data-aos="fade-up" data-aos-once>
            <div className="wrapper">
              <div className="inner-wrapper">
                <div className="title">
                  <h2>Simple pricing that works for everyone</h2>
                  <p>Save with confidence, not high fees. No brokerage. No <br/> upfront fees. Cancel anytime</p>
                </div>
              </div>
            </div>
          </section>
          <section className="pricing-switch" data-aos="fade-up" data-aos-once>
            <div className="wrapper">
              <div className="inner-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="price-thumb">
                      <h2>$1.25<span>per month</span></h2>
                      <p>for accounts under $5,500</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="price-thumb">
                      <h2>0.275%<span>a year</span></h2>
                      <p>for accounts over $5,500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="what-get" data-aos="fade-up" data-aos-once>
            <div className="wrapper">
              <div className="inner-wrapper">
                <h2 className="text-center">What you get from us</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Low minimums</h4>
                        <p>Get started with as little as e I never charge fees on $0 balance</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Low minimums</h4>
                        <p>All sensitive data is secured using 256 bit encryption</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Save effortlessly</h4>
                        <p>Automatically save for your goals and save more amount easily</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Investing themes</h4>
                        <p>All sensitive data is secured using 256 bit encryption</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Save effortlessly</h4>
                        <p>Automatically save for your goals and save more amount easily</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <div className="check">
                        <img src={withPrefix('/images/icon-tick.svg')}/>
                      </div>
                      <div className="info">
                        <h4>Make invest automatic</h4>
                        <p>Create a saving plan so you can make invest a habit over the long run</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="special-offer" data-aos="fade-up" data-aos-once>
            <div className="wrapper">
              <div className="inner-wrapper text-center">
                <h2 className="text-center">Special offers for students</h2>
                <p className="text-center">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                <button type="button" className="btn btn-pink-gradient">Get 3 months free</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default PricingPage;
