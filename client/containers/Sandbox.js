import React, { Component } from 'react'


export default class Sandbox extends Component {
  constructor() {
    super()

    this.state = {
      posO: false,
      overlayCss: 'translateY(0)',
      op: 0,
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ posO: true })
        this.setState({ op: 1 })
      setTimeout(() => {
        setTimeout(()=>{
          this.setState({ overlayCss: 'translateY(-100%)' })
          setTimeout(()=>{
            this.setState({ hide: 'none' })
          }, 1000)
        }, 1000)
      }, 1000)
    }, 500)
  }
  
  render() {
    return ( <div>
              <div className='overlay'  style={{transform: this.state.overlayCss}}></div>
              <div className={'name-animation ' + (this.state.posO && 'pos-0') } style={{display: this.state.hide}}>
                <span className='opacity-animation' style={{opacity: this.state.op}}>- </span>
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
                <span className='opacity-animation' style={{opacity: this.state.op, letterSpacing: 0}}> -</span>
              </div>
            </div>       
    );
  }
}
              // <div className='names'>
              //   <span>- </span>
              //   <span>C</span>
              //   <span>a</span>
              //   <span>r</span>
              //   <span>l</span>
              //   <span>o</span>
              //   <span>s </span>
              //   <span>d</span>
              //   <span>e </span>
              //   <span>l</span>
              //   <span>a </span>
              //   <span>G</span>
              //   <span>a</span>
              //   <span>r</span>
              //   <span>z</span>
              //   <span>a </span>
              //   <span>-</span>
            
              // </div>