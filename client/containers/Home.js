import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import Splash from '../components/Splash'
import Nav from '../components/Nav'
import About from '../components/About'
import Discography from '../components/Discography'
import Contact from '../components/Contact'

export default class Home extends Component {
  constructor(){
    super()

    this.state ={
      isDown: false,
      burgerHide: false

    }
  }


  componentDidMount(){
    const hamburger = ReactDOM.findDOMNode(this.refs.hamburger)
    console.log(hamburger)
    document.addEventListener('scroll', ()=>{
      if (window.scrollY < 180) {
        this.setState({burgerHide:true})
      } else {
        this.setState({burgerHide:false})
      }
    })
  }

  navDownHandler(){
      this.setState({navIsDown:true})
  }

  navUpHandler(){
      this.setState({navIsDown:false})
  }

  navUpHandlerToogle(){
      this.setState({navIsDown:!this.state.navIsDown})
  }


  render() {
    return ( <div>
  <div onMouseEnter={this.navDownHandler.bind(this)} onClick={this.navUpHandlerToogle.bind(this)} className={'hamburger-wrapper'}>
                <div className={'hamburger '+ (this.state.burgerHide ? 'burger-hide' : '')}></div>
              </div>
              <div onMouseLeave={this.navUpHandler.bind(this)} className={'collapse-nav nav-'+ (this.state.navIsDown ? 'down': 'up')}>
                <div className={'nav-transition-delay nav-'+ (this.state.navIsDown ? 'down': 'up') }>
                  <Nav />
                </div>
              </div>
              <Splash />
              <About />
              <Discography />
              <Contact />
            </div>       
    );
  }
}
              // <div className='overlay' style={{transform: this.state.overlayCss}}></div>