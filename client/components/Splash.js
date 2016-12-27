import React, { Component } from 'react'
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
    let moveNum = 0

    setTimeout(() => {
      const nameAnimationInterval = setInterval(()=>{
        this.setState({ ['move'+moveNum]: true })
        moveNum += 1
        console.log(moveNum)
        if (moveNum > 15) clearInterval(nameAnimationInterval)
      }, 100)
        this.setState({ op: 1 })
      setTimeout(() => {
      document.body.style.background = 'white'
        setTimeout(()=>{
          this.setState({exit: true})
          this.setState({ overlayCss: 'translateY(-120%)',posY: 0, textOpacity: 0 })

          setTimeout(()=>{
            this.setState({ hide: 'none' })
          }, 1000)
        }, 1000)
      }, 3000)
    }, 1000)
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
              <div className='overlay'  style={{transform: this.state.overlayCss}}>
              </div>
              <div className={'name-animation ' + (this.state.posO && 'pos-0') } style={{display: this.state.hide}}>
                <span className='opacity-animation' style={{opacity: this.state.op}}>- </span>
                <span className='spacing'> </span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move0 ? 'pos-0' : 'pos-up')}>C</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move1 ? 'pos-0' : 'pos-up')}>a</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move2 ? 'pos-0' : 'pos-up')}>r</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move3 ? 'pos-0' : 'pos-up')}>l</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move4 ? 'pos-0' : 'pos-up')}>o</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move5 ? 'pos-0' : 'pos-up')}>s </span>
                <span className='spacing'> </span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move6 ? 'pos-0' : 'pos-up')}>d</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move7 ? 'pos-0' : 'pos-up')}>e </span>
                <span className='spacing'> </span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move8 ? 'pos-0' : 'pos-up')}>l</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move9 ? 'pos-0' : 'pos-up')}>a </span>
                <span className='spacing'> </span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move10 ? 'pos-0' : 'pos-up')}>G</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move11 ? 'pos-0' : 'pos-up')}>a</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move12 ? 'pos-0' : 'pos-up')}>r</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move13 ? 'pos-0' : 'pos-up')}>z</span>
                <span className={this.state.exit ? 'pos-exit' : (this.state.move14 ? 'pos-0' : 'pos-up')}>a</span>
                <span className='spacing'> </span>
                <span className='opacity-animation' style={{opacity: this.state.op, letterSpacing: 0}}> -</span>
              </div>
              
              <div className='splash-header-box' id='home' style={{transform: 'translateY('+this.state.posY+'%)'}}>
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
