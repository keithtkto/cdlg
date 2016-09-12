import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return ( <div className='nav-container'>
              <ul  style={{height: this.props.height}}>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>       
    );
  }
}