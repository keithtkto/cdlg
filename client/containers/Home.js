import React, { Component } from 'react'


import Splash from '../components/Splash'
import About from '../components/About'
import CreditShowcase from '../components/CreditShowcase'
import Contact from '../components/Contact'

export default class Home extends Component {
  constructor(){
    super()

    this.state ={
      overlayCss: 'translateY(0)',

    }
  }


  componentDidMount(){
    setTimeout(()=>{
      this.setState({overlayCss: 'translateY(-100%)' })
      setTimeout(()=>{
        
      })
    }, 1000)
  }


  render() {
    return ( <div>
              <div className='overlay' style={{transform: this.state.overlayCss}}></div>
              <Splash />
              <About />
              <CreditShowcase />
              <Contact />
            </div>       
    );
  }
}