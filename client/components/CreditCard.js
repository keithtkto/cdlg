import React, { Component } from 'react'

export default class CreditCard extends Component {
  render() {

    const credit = this.props.credit
    return ( <div>
              <span>{credit.band}</span> 
              <span>{credit.album}</span> 
              <span>{credit.label}</span> 
              <span>{credit.year}</span> 
              <span>{credit.role}</span> 
            </div>       
    );
  }
}
