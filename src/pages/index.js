/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import './_index.scss';

const IndexPage = props =>
  (<main>
    <div className="homepage">
      <section className="banner">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-left">
                <h1>A smarter way to SAVE</h1>
                <h3>Choose a goal and start saving in minutes</h3>
                <div className="download-cta">
                  <p>Text your phone a download link to your IOS and android apps</p>
                  <form className="form-inline">
                    <div className="form-group">
                      <label htmlFor="examplePassword" hidden>Password</label>
                      <input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </div>
                    {' '}
                    <button type="button btn-pink-gradient" className="btn">Send</button>
                  </form>
                </div>
                <div className="d-flex phone-cta">
                  <button type="button" className="btn btn-phone mac"><img src="images/mac-os.png"/></button>
                  <button type="button" className="btn btn-phone android"><img src="images/android.png"/></button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-right">
                <img src="images/iphone_x.png" className="iphone-investment iphone-img"/>
                <img src="images/iphone_account.png" className="iphone-account iphone-img"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-on">
        <div className="wrapper">
          <ul>
            <li><p>Featured on</p></li>
            <li><img src="images/Sydney_Morning_Herald_logo.png" /></li>
            <li><img src="images/theagelogo.png" /></li>
            <li><img src="images/startup-smart.png" /></li>
            <li><img src="images/logo-orange.png" /></li>
          </ul>
        </div>
      </section>
      <section className="app-screen">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="section-left">
                  <img src="images/iphone_contribution.png" className="iphone-img" />
                </div>
              </div>
              <div className="col-6">
                <div className="section-right text-right">
                  <h2>For small goals or big goals</h2>
                  <p>Set your financial goal and we will help you get there automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-screen">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="section-left">
                  <h2>Save like a genius through microinvesting</h2>
                  <p>Invest your spare change from everyday purchases and invest recurring deposits</p>
                </div>
              </div>
              <div className="col-6">
                <div className="section-right text-right">
                  <img src="images/iphone_firststep.png" className="iphone-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-screen">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="section-left">
                  <img src="images/iphone_transaction.png" className="iphone-img" />
                </div>
              </div>
              <div className="col-6">
                <div className="section-right text-right">
                  <h2>Spend less and stay on track</h2>
                  <p>Enhance your savings through automatic spend categorisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="account">
        <div className="wrapper">
          <h2 className="text-center">Your very own intelligent investment account</h2>
          <div className="row">
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-necktie.svg" />
                </div>
                <p>Have over 150 years of investment experience</p>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-trunk.svg" />
                </div>
                <p>Personalised portfolio that reflects you</p>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-dollar.svg" />
                </div>
                <p>Invest and withdraw your money anytime</p>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-alarm.svg" />
                </div>
                <p>Timely investment notification. Friendly in-app chat support</p>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-thumb.svg" />
                </div>
                <p>No paper. No investment knowledge required</p>
              </div>
            </div>
            <div className="col-4">
              <div className="info">
                <div className="account-img">
                  <img src="images/icon-check.svg" />
                </div>
                <p>Its pretty easy to use. Learn as you go</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="safe-secure">
        <div className="wrapper">
          <h2 className="text-center">Safe and secure</h2>
          <div className="row">
            <div className="col-8 offset-md-2">
              <div className="text-center">
                <p>Firststep is a fully licensed managed investment scheme, regulated by the Australian investments Securities Commission. <br/><br/>
                Every Furststep account is protected by bank level encryption, anti fraud protection and insurance</p>
                <button type="button" className="btn btn-pink-gradient">Explore more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        
      </footer>
      {/* <Features data={props.data.allDataJson.edges[0].node.features} />
      <HowTo data={props.data.allDataJson.edges[0].node.howTo} /> */}
    </div>
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
