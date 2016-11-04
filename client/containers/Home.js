import React, { Component } from 'react'


import Splash from '../components/Splash'
import About from '../components/About'
import CreditShowcase from '../components/CreditShowcase'
import Contact from '../components/Contact'

export default class Home extends Component {
  render() {
    return ( <div>
              <Splash height={this.props.height} />
              <About height={this.props.height} />
            </div>       
    );
  }
}
              // <CreditShowcase />
              // <Contact />