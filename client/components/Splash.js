import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';
import Nav from './Nav'



export default class Splash extends Component {
  constructor(){
    super()
    this.state = {
      boxBorder: 1,
      lastScrollTop: 0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
    // document.getElementById('carlos').style.textShadow = '-30px 2px 2px #3AAFB9'
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(){
    // console.log('scroll', this.state.boxBorder, window.pageYOffset )
    const lastScrollTop = this.state.lastScrollTop
    const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //  if (st > lastScrollTop){
  //      // downscroll code
  //      console.log('scroll down', st)
  //     this.setState({
  //                     boxBorder: this.state.boxBorder > 0 ? 1 - (st * 0.01) : 0,
  //                     lastScrollTop: st
  //                   })
  //  } else {
  //     // upscroll code
  //      console.log('scroll up', st)
  //     this.setState({ 
  //                     boxBorder: this.state.boxBorder < 1 ? 1 - (st * 0.01) : 1,
  //                     lastScrollTop: st
  //                   })
  //  }

   if (window.pageYOffset/window.innerHeight > 0.7) {
     this.setState({showFullname: true})
   } else {
     this.setState({showFullname: false})
   }
   

  }


  render() {
    return ( <div className='splash-container'>
              <div className='splash-header-box'>
                <h1 id='carlos' className='splash-header'>- Carlos de la Garza -</h1>
                <Nav /> 
                <div className='splash-photo'></div>
              </div>
            </div>       
    );
  }
}
                // <div className='splash-photo' style={{margin: '0 auto'}}></div>
              // <div className={this.state.showFullname? 'splash-fullname splash-fullname-show':'splash-fullname splash-fullname-hide'}>carlos de la garza</div>
                // <h4>Producer - Engineer</h4>
                // <h4>Mixer - Songwriter</h4>