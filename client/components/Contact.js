import React, { Component } from 'react'
const {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('react-spark-scroll-gsap')({
    invalidateAutomatically: true
  });

export default class Contact extends Component {
  render() {
    return ( <div className='twelves container contact-container' id='contact'>
              <SparkScroll.div
                timeline={{
                  topBottom: { opacity: 0 },
                  centerCenter: { opacity: 1 }
                }}>
                      <h1 style={{textDecoration: 'uppercase'}}>Contact</h1>
              </SparkScroll.div>
              <SparkScroll.div
                timeline={{
                  topBottom: { opacity: 0 },
                  centerCenter: { opacity: 1 }
                }}>
                <h5 style={{letterSpacing: 2}}>
                  dan@thisisnoisemgmt.com
                </h5>
              </SparkScroll.div>
            </div>       
    );
  }
}