import React, { Component } from 'react'

import CreditCard from '../components/CreditCard'

import {credits} from '../helpers/credits'



export default class CreditShowcase extends Component {
  render() {
    return ( <div>
                {credits.map((credit, i)=> {
                    return ( <div key={i}>
                                <CreditCard credit={credit} />
                             </div>)
                })}
            </div>       
    );
  }
}