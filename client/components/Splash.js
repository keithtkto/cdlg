import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';
import Nav from './Nav'



export default class Splash extends Component {
  constructor(){
    super()
    this.state = {
      boxBorder: 1,
      lastScrollTop: 0,
      splashHeaderCss: false
    }
  }

  componentDidMount(){
    // window.addEventListener('scroll', this.handleScroll.bind(this))
    // document.getElementById('carlos').style.textShadow = '-30px 2px 2px #3AAFB9'
    setTimeout(()=>{
      console.log('splash header')
      this.setState({splashHeaderCss: true})
    }, 1500)
}

  componentWillUnmount(){
    // window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  // handleScroll(){
  //   // console.log('scroll', this.state.boxBorder, window.pageYOffset )
  //   const lastScrollTop = this.state.lastScrollTop
  //   const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  // //  if (st > lastScrollTop){
  // //      // downscroll code
  // //      console.log('scroll down', st)
  // //     this.setState({
  // //                     boxBorder: this.state.boxBorder > 0 ? 1 - (st * 0.01) : 0,
  // //                     lastScrollTop: st
  // //                   })
  // //  } else {
  // //     // upscroll code
  // //      console.log('scroll up', st)
  // //     this.setState({ 
  // //                     boxBorder: this.state.boxBorder < 1 ? 1 - (st * 0.01) : 1,
  // //                     lastScrollTop: st
  // //                   })
  // //  }

  //  if (window.pageYOffset/window.innerHeight > 0.7) {
  //    this.setState({showFullname: true})
  //  } else {
  //    this.setState({showFullname: false})
  //  }
   

  // }


  render() {

    console.log('this.state.splashHeaderCss', this.state.splashHeaderCss)
    return ( <div className='splash-container container'>
              <div className='splash-header-box'>
                <h1 id='carlos' className={this.state.splashHeaderCss? 'splash-header-top' :  'splash-header-center'}>- Carlos de la Garza -</h1>
                  <div className={'nav '+(this.state.splashHeaderCss? 'op1':'op0' )}>
                    <Nav /> 
                  </div>
                  <div className={'splash-photo-op '+(this.state.splashHeaderCss? 'op1':'op0') }>
                    <div className={'splash-photo twelve columns '+(this.state.splashHeaderCss? 'splash-header-top splash-photo-y1' :  'splash-header-center splash-photo-y0')} 
                        style={{margin: '0 auto 40px'}}></div>
                  </div>
              </div>
            </div>       
    );
  }
}
