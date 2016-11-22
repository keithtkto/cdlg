import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';
import Nav from './Nav'



export default class Splash extends Component {
  constructor(){
    super()
    this.state = {
      boxBorder: 1,
      lastScrollTop: 0,
      splashHeaderCss: false,
      posO: false,
      overlayCss: 'translateY(0)',
      op: 0,
      posY: 500
    }
  }

  componentDidMount(){
    // window.addEventListener('scroll', this.handleScroll.bind(this))
    // document.getElementById('carlos').style.textShadow = '-30px 2px 2px #3AAFB9'
    setTimeout(()=>{
      console.log('splash header')
      this.setState({splashHeaderCss: true})
    }, 1500)

    setTimeout(() => {
      this.setState({ posO: true })
      this.setState({ op: 1 })
      setTimeout(() => {
        setTimeout(() => {
          this.setState({ overlayCss: 'translateY(-100%)',posY: 0, textOpacity: 0 })
          setTimeout(() => {
            this.setState({ hide: 'none', posY: 0 })
          }, 500)
        }, 1000)
      }, 1000)
    }, 500)
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

    return ( <div className='splash-container container'>
              <div className='overlay' style={{ transform: this.state.overlayCss }}></div>
              <div className={'name-animation ' + (this.state.posO && 'pos-0')} style={{ display: this.state.hide, opacity: this.state.textOpacity }}>
                <span className='opacity-animation' style={{ opacity: this.state.op }}>- </span>
                <span className='spacing'> </span>
                <span className='pos-up'>C</span>
                <span className='pos-up'>a</span>
                <span className='pos-up'>r</span>
                <span className='pos-up'>l</span>
                <span className='pos-up'>o</span>
                <span className='pos-up'>s </span>
                <span className='spacing'> </span>
                <span className='pos-down'>d</span>
                <span className='pos-down'>e </span>
                <span className='spacing'> </span>
                <span className='pos-up'>l</span>
                <span className='pos-up'>a </span>
                <span className='spacing'> </span>
                <span className='pos-down'>G</span>
                <span className='pos-down'>a</span>
                <span className='pos-down'>r</span>
                <span className='pos-down'>z</span>
                <span className='pos-down'>a</span>
                <span className='spacing'> </span>
                <span className='opacity-animation' style={{ opacity: this.state.op, letterSpacing: 0 }}> -</span>
              </div>
              
              <div className='splash-header-box' style={{transform: 'translateY('+this.state.posY+'%)'}}>
                <h1 id='carlos' className={'splash-header-top'}>- Carlos de la Garza -</h1>
                  <div className={'nav '+(this.state.splashHeaderCss? 'op1':'op0' )}>
                    <Nav /> 
                  </div>
                    <div className={'splash-photo twelve columns splash-header-top'} 
                        style={{margin: '0 auto 40px'}}>
                    </div>
              </div>
            </div>       
    );
  }
}
