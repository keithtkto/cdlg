import React, { Component } from 'react'

export default class CreditCard extends Component {
  render() {

    const credit = this.props.credit
    return ( <div className={'card ' +'card-'+(this.props.order % 3)}>
              <span>{credit.band}</span> 
              <span>{credit.album}</span> 
              <span>{credit.label}</span> 
              <span>{credit.year}</span> 
              <span>{credit.role}</span> 
              <div></div>
            </div>       
    );
  }
}
