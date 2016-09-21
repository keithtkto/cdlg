import React, { Component } from 'react'

import Nav from '../components/Nav'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      height: window.innerHeight
    }
  }

  
  render() {
    return ( <div style={{width: 1200, margin: '0 auto'}}>
              <Nav height={this.state.height} /> 
              <div style={{margin: '0 75px'}}>
                {React.cloneElement(this.props.children, { height: this.state.height })}
              </div>
            </div>       
    );
  }
}