import React, { Component } from 'react'
import {Motion, spring} from 'react-motion';



export default class Splash extends Component {
  constructor(){
    super()
    this.state = {
      carlosTop: 10,
      boxBorder: 1,
      lastScrollTop: 0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this))
    this.setState({carlosTop: 10})

  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(){
    console.log('scroll', this.state.boxBorder, window.pageYOffset )
    const lastScrollTop = this.state.lastScrollTop
    const st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
       // downscroll code
       console.log('scroll down', st)
      this.setState({
                      boxBorder: this.state.boxBorder > 0 ? 1 - (st * 0.01) : 0,
                      lastScrollTop: st
                    })
   } else {
      // upscroll code
       console.log('scroll up', st)
      this.setState({ 
                      boxBorder: this.state.boxBorder < 1 ? 1 - (st * 0.01) : 1,
                      lastScrollTop: st
                    })
   }

   if (window.pageYOffset/window.innerHeight > 0.7) {
     this.setState({showFullname: true})
   } else {
     this.setState({showFullname: false})
   }
   

  }


  render() {
    return ( <div style={{height: this.props.height}} className='splash-container'>
              <div className={this.state.showFullname? 'splash-fullname splash-fullname-show':'splash-fullname splash-fullname-hide'}>carlos de la garza</div>
              <div style={{border: '15px solid rgba(255, 255, 255,'+this.state.boxBorder+')'}} className='splash-header-box'>
                <h1 id='carlos' style={{top: this.state.carlosTop}} className='splash-header'>carlos</h1>
                <h1 className='splash-header'>de la</h1>
                <h1 className='splash-header'>garza</h1>
              </div>
            </div>       
    );
  }
}