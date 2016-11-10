import React, { Component } from 'react'

export default class CreditThumbnail extends Component {
  render() {
      console.log(this.props)

    const credit = this.props.credit
    return ( <div>
              <span>{credit.band}</span> 
              <span>{credit.album}</span> 
              <span>{credit.label}</span> 
              <span>{credit.role}</span> 
            </div>       
    );
  }
}

              // <span>{credit.year}</span> 