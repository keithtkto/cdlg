import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor'


export default class App extends Component {
  render() {
    return ( <div className='nav-container'>
              <ul>
                <li>&middot;</li>
                <li>
                  <Scrollchor to="home" animate={{duration: 600}} className="underline-animation">
                    Home
                  </Scrollchor>
                </li>
                <li>&middot;</li>
                <li>
                  <Scrollchor to="about" animate={{duration: 600}} className="underline-animation">
                    About
                  </Scrollchor>
                </li>
                <li>&middot;</li>
                <li>
                  <Scrollchor to="discography" animate={{duration: 600}} className="underline-animation">
                    Discography
                  </Scrollchor>
                </li>
                <li>&middot;</li>
                <li>
                  <Scrollchor to="contact" animate={{duration: 600}} className="underline-animation">
                    Contact
                  </Scrollchor>
                </li>
                <li>&middot;</li>
              </ul>
            </div>       
    );
  }
}