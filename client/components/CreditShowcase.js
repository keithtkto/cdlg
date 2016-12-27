import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CreditCard from './CreditCard'
import CreditModal from './CreditModal'

import {credits} from '../helpers/credits'

const {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('react-spark-scroll-gsap')({
    invalidateAutomatically: true
  });


export default class CreditShowcase extends Component {
  sortCredits() {
    const sortCredits = {}
    credits.forEach((c) => {
      if (sortCredits[c.year]) {
        sortCredits[c.year].push(c)
      } else {
        sortCredits[c.year] = [ c.year ,c]
      }
    })
    return sortCredits
  }

  constructor(){
		super()
		this.state = {
      creditIdx: null
		}
	}


  componentDidMount() {
    window.addEventListener("keydown", (e)=>{
      if (this.state.creditIdx != null)  {
        //left arrow
        if ((e.keyCode || e.which) == 37) {
          this.toPreviousCredit()
        }
        //right arrow
        if ((e.keyCode || e.which) == 39) {
          this.ToNextCredit()
        }
        // Esc
        if ((e.keyCode || e.which) == 27) {
          this.closeCreditModal()
        }
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", (e)=>{
      if (this.state.creditIdx != null)  {
        //left arrow
        if ((e.keyCode || e.which) == 37) {
          this.toPreviousCredit()
        }
        //right arrow
        if ((e.keyCode || e.which) == 39) {
          this.ToNextCredit()
        }
        // Esc
        if ((e.keyCode || e.which) == 27) {
          this.closeCreditModal()
        }
      }
    });
  }
  
	openCreditModal(creditIdx){
		this.setState({creditIdx: creditIdx})
    document.body.style.overflow = 'hidden'
	}

	closeCreditModal(){
		this.setState({creditIdx: null})
    document.body.style.overflow = ''
	}

  toPreviousCredit(){
      this.setState({creditIdx: this.state.creditIdx - 1 === -1 ? 0 : this.state.creditIdx - 1 })
  }
  ToNextCredit(){
      this.setState({creditIdx: this.state.creditIdx + 1 === credits.length ? this.state.creditIdx : this.state.creditIdx + 1 })
  }



  
  render() {
    const sortedCredits = this.sortCredits()
    const years = Object.keys(sortedCredits).reverse()
SparkScroll.div 
    return ( <div className='container credit-showcase-container' id='discography' style={{position: 'relative'}}>
                {this.state.creditIdx !== null && <CreditModal 
                                                        creditsLength={credits.length}
                                                        idx={this.state.creditIdx}
                                                        credit={credits[this.state.creditIdx]} 
                                                        closeCreditModal={this.closeCreditModal.bind(this)}
                                                        toPreviousCredit={this.toPreviousCredit.bind(this)}
                                                        ToNextCredit={this.ToNextCredit.bind(this)}/>}
                <SparkScroll.div
                timeline={{
                  topBottom: { opacity: 0 },
                  centerCenter: { opacity: 1 }
                }}>
                  <h1>Discography</h1>
                </SparkScroll.div>
                <div style={{width: '100%'}}>          
                  <div className='credit-by-year'>
                    {credits.map((c,i)=> <CreditCard key={i} order={i} credit={c} openCreditModal={this.openCreditModal.bind(this, i)} />)}
                  </div>
                </div>
            </div>       
    );
  }
}