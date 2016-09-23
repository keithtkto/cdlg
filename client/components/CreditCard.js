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
	// 	return (
  //     <div style={{
	// 			height: 1000,
	// 			width: 1400,
	// 			zIndex: 100,}} onClick={this.openPopupBubble.bind(this)}>
  //       <h1>Sandbox</h1>
	// 			<div style={{position: 'relative'}}>
	// 			<div style={{backgroundImage: 'url('+url+')', display: 'inline-block', width: 200, height: 200, backgroundSize: 'contain', boxShadow: '5px 2px 19px 2px rgba(0,0,0,0.75)'}}></div>
	// 				<div style={{display: 'inline-block', lineHeight: 1.2, position: 'absolute', left: 225, top: 10, textShadow: textShadow}}>
	// 					<div style={{fontSize: 36, fontWeight: 'bold'}}>m83</div>
	// 					<div style={{fontSize: 28, fontWeight: 'bold'}}>Junk</div>
	// 					<div style={{fontSize: 24, fontWeight: 'bold'}}>Mute</div>
	// 					<div style={{fontSize: 24, fontWeight: 'bold'}}>2016</div>
	// 					<div style={{fontSize: 32, fontWeight: 'bold'}}>Engineer</div>
	// 				</div>
	// 			</div>
	// 			<div style={{position: 'relative'}}>
	// 				<div style={{backgroundImage: 'url('+url+')', display: 'inline-block', width: 200, height: 200, backgroundSize: 'contain', boxShadow: '5px 2px 19px 2px rgba(0,0,0,0.75)'}}></div>
	// 					<div style={{display: 'inline-block', lineHeight: 1.2, position: 'absolute', left: 225, top: 10, textShadow: textShadow}}>
	// 						<div style={{fontSize: 36, fontWeight: 'bold'}}>The Naked and Famous</div>
	// 						<div style={{fontSize: 28, fontWeight: 'bold'}}>Simple Forms</div>
	// 						<div style={{fontSize: 24, fontWeight: 'bold'}}>KLS/Somewhat Damaged </div>
	// 						<div style={{fontSize: 24, fontWeight: 'bold'}}>2016</div>
	// 						<div style={{fontSize: 32, fontWeight: 'bold'}}>Engineer</div>
	// 					</div>
	// 				</div>
	// 			<div style={{position: 'relative'}}>
	// 				<div style={{backgroundImage: 'url('+url+')', display: 'inline-block', width: 200, height: 200, backgroundSize: 'contain', boxShadow: '5px 2px 19px 2px rgba(0,0,0,0.75)'}}></div>
	// 					<div style={{display: 'inline-block', lineHeight: 1.2, position: 'absolute', left: 225, top: 10, textShadow: textShadow}}>
	// 						<div style={{fontSize: 36, fontWeight: 'bold'}}>The Naked and Famous</div>
	// 						<div style={{fontSize: 28, fontWeight: 'bold'}}>I Thought the Future Would Be Cooler</div>
	// 						<div style={{fontSize: 24, fontWeight: 'bold'}}>KLS/Somewhat Damaged </div>
	// 						<div style={{fontSize: 24, fontWeight: 'bold'}}>2016</div>
	// 						<div style={{fontSize: 32, fontWeight: 'bold'}}>Producer, engineer, mixer, keys</div>
	// 					</div>
	// 				</div>
  //     </div>
	// 	)
	// }
