import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return ( <div className='nav-container'>
              <ul>
                <li>Home</li>
                <li>&middot;</li>
                <li>About</li>
                <li>&middot;</li>
                <li>Portfolio</li>
                <li>&middot;</li>
                <li>Contact</li>
              </ul>
            </div>       
    );
  }
}