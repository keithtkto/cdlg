import React, { Component } from 'react'


export default class Sandbox extends Component {
  constructor() {
    super()

    this.state = {
      overlayCss: 'translateY(0)',

    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      // this.setState({ overlayCss: 'translateY(-100%)' })
      setTimeout(() => {

      })
    }, 1000)
  }
  
  render() {
    return ( <div>
              <div className='overlay' style={{transform: this.state.overlayCss}}></div>
              <div className='name-animation'>
                <span>- </span>
                <span>C</span>
                <span>a</span>
                <span>r</span>
                <span>l</span>
                <span>o</span>
                <span>s </span>
                <span> </span>
                <span>d</span>
                <span>e </span>
                <span>l</span>
                <span>a </span>
                <span>G</span>
                <span>a</span>
                <span>r</span>
                <span>z</span>
                <span>a</span>
                <span> -</span>
            
              </div>
            </div>       
    );
  }
}