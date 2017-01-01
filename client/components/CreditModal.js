import React, { Component } from 'react'

export default class CreditModal extends Component {
  render() {
    console.log('CreditModal',this.props)

    const credit = this.props.credit
    return ( <div className='modal'>
              <div className='modal-content'>
               <div className='arrows' style={{opacity: this.props.idx === 0 ? 0 : 1}} onClick={this.props.toPreviousCredit}>{'<'}</div>
								<div className={'album-cover-in-modal '+ (credit.cover? credit.cover.split('.')[0]: 'no-cover-in-modal')} style={{margin: 0}}>
									{credit.cover ? '' : <span className='u-tt5050' style={{letterSpacing: 2, fontSize: 24}}>Forthcoming Album</span>}
								</div>   
                <div className='album-credit-in-modal'>
                  <svg onClick={this.props.closeCreditModal} className="checkmark u-p" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <path className="checkmark__check u-p" fill="white" d="M16 16 36 36 M36 16 16 36" />
                  </svg>
                  <div className='album-credit-in-modal-top'>
                    <span className='modal-credit-large'>{credit.band}</span> 
                    <span className='modal-credit-large'>{credit.album}</span> 
                    <span className='modal-credit-normal'>{credit.label}</span> 
                    <span className='modal-credit-normal'>{credit.year}</span> 
                  </div>
                  <span className='modal-credit-large album-credit-in-modal-roles' style={{alignSelf: 'flex-end', textAlign: 'right', fontWeight: 300}}>{credit.role}</span> 
                </div>      
                <div className='arrows' style={{opacity: this.props.idx === this.props.creditsLength - 1 ? 0 : 1}} onClick={this.props.ToNextCredit}>{'>'}</div>
              </div>      
            </div>       
    );
  }
}

              // <span>{credit.year}</span> 