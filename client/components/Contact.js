import React, { Component } from 'react'

import Underline from './Underline'


export default class Contact extends Component {
  render() {
    return ( <div className='twelves container contact-container' id='contact'>
              <div>
                      <h1 style={{textDecoration: 'uppercase'}}>Contact</h1>
              </div>
              <Underline />
              <div>
                <h5 style={{letterSpacing: 2}}>
                  dan@thisisnoisemgmt.com
                </h5>
              </div>
            </div>       
    );
  }
}