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
            <div className="col-6">
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
                    <button type="button" className="btn">Send</button>
                  </form>
                </div>
                <div className="d-flex phone-cta">
                  <button type="button" className="btn btn-phone mac"><img src="images/mac-os.png"/></button>
                  <button type="button" className="btn btn-phone android"><img src="images/android.png"/></button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="banner-right">
                <img src="images/iphone_x.png" className="iphone-investment"/>
                <img src="images/iphone_account.png" className="iphone-account"/>
              </div>
            </div>
          </div>
        </div>
      </section>
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
