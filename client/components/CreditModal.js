import React, { Component } from 'react'

export default class CreditModal extends Component {
  render() {
    console.log('CreditModal',this.props)

    const credit = this.props.credit
    return ( <div className='modal'>
              <div onClick={this.props.closeCreditModal}>x</div>
              <div className='modal-content'>

								<div className={'card-album-cover album-cover-in-modal '+ (credit.cover? credit.cover.split('.')[0]: 'no-cover')}>
									{credit.cover ? '' : <span className='u-tt5050' style={{letterSpacing: 2}}>Forthcoming Album</span>}
								</div>   
                <div className='album-credit-in-modal'>
                  <h2>{credit.band}</h2> 
                  <h2>{credit.album}</h2> 
                  <h4>{credit.label}</h4> 
                  <h4>{credit.year}</h4> 
                  <h2>{credit.role}</h2> 
                </div>      
              </div>      
            </div>       
    );
  }
}

              // <span>{credit.year}</span> 