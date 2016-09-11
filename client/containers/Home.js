import React, { Component } from 'react'


import Splash from '../components/Splash'
import About from '../components/About'
import CreditShowcase from '../components/CreditShowcase'
import Contact from '../components/Contact'

export default class Home extends Component {
  render() {
    return ( <div>
              <h1>HOME</h1>
              <Splash />
              <About />
              <CreditShowcase />
              <Contact />
            </div>       
    );
  }
}