import React, { Component } from 'react'

import CreditCard from '../components/CreditCard'

import {credits} from '../helpers/credits'



export default class CreditShowcase extends Component {
  render() {
    return ( <div style={{position: 'relative'}}>
                <h2></h2>
                {credits.map((credit, i)=> {
                    return ( <div key={i}>
                                <CreditCard order={i} credit={credit} />
                             </div>)
                })}
            </div>       
    );
  }
}