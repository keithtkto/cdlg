import React, { Component } from 'react'

export default class CreditCard extends Component {

  render() {
    const credit = this.props.credit
    return ( <div className={'card ' +'card-'+(this.props.order % 3)}>
              <div className='card-album-cover'></div>
              <div className='card-album-credits'>
                <span>{credit.band}</span> 
                <span>{credit.album}</span> 
                <span>{credit.label}</span> 
                <span>{credit.year}</span> 
                <span>{credit.role}</span> 
              </div>
            </div>       
    );
  }
}
