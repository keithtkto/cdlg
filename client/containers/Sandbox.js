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
        setTimeout(()=>{
          this.setState({exit: true})
          this.setState({ overlayCss: 'translateY(-100%)' })
          setTimeout(()=>{
            this.setState({ hide: 'none' })
          }, 1000)
        }, 1000)
      }, 3000)
    }, 1000)
  }
  
  render() {
    return ( <div>
              <div className='overlay'  style={{transform: this.state.overlayCss}}></div>
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