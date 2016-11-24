import React, { Component } from 'react'


export default class App extends Component {
  render() {
    return ( <div className='nav-container'>
              <ul>
                <li>&middot;</li>
                <li>
                  <a href="" className='underline-animation'>Home</a>
                </li>
                <li>&middot;</li>
                <li>
                  <a href="" className='underline-animation'>About</a>
                </li>
                <li>&middot;</li>
                <li>
                  <a href="" className='underline-animation'>Discography</a>
                </li>
                <li>&middot;</li>
                <li>
                  <a href="" className='underline-animation'>Contact</a>
                </li>
                <li>&middot;</li>
              </ul>
            </div>       
    );
  }
}