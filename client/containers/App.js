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
    return ( <div style={{maxWidth: 1200, width: '100%', margin: '0 auto'}}>
              <div>
                {React.cloneElement(this.props.children, { height: this.state.height })}
              </div>
            </div>       
    );
  }
}