import React, { Component } from 'react'



export default class Splash extends Component {

  render() {
    return ( <div style={{height: this.props.height}} className='splash-container'>
              <div className='splash-header-box'>
                <h1 className='splash-header'>carlos</h1>
                <h1 className='splash-header'>de la</h1>
                <h1 className='splash-header'>garza</h1>
              </div>
            </div>       
    );
  }
}