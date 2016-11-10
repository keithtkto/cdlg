import React, { Component } from 'react'

import CreditCard from '../components/CreditCard'

import {credits} from '../helpers/credits'



export default class CreditShowcase extends Component {
  sortCredits() {
    const sortCredits = {}
    credits.forEach((c) => {
      if (sortCredits[c.year]) {
        sortCredits[c.year].push(c)
      } else {
        sortCredits[c.year] = [c]
      }
    })
    return sortCredits
  }
  
  render() {
    const sortedCredits = this.sortCredits()
    const years = Object.keys(sortedCredits).reverse()
    return ( <div className='container credit-showcase-container' style={{position: 'relative'}}>
                <h1>Work</h1>
                <div style={{width: '100%'}}>
                  {years.map((y, i)=>{
                    return (<div key={i}>
                      <h3>{y}</h3>
                      <div className='credit-by-year'>
                        {sortedCredits[y].map((c, j)=> <CreditCard key={j} order={j} credit={c} />)}
                      </div>
                    </div>)
                  })}
                </div>
            </div>       
    );
  }
}