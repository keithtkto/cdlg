import React, { Component } from 'react'

import CreditThumbnail from '../components/CreditThumbnail'

import {credits} from '../helpers/credits'



export default class Home extends Component {
  render() {
    return ( <div>
                {credits.map((credit, i)=> {
                    return ( <div key={i}>
                                <CreditThumbnail credit={credit} />
                             </div>)
                })}
            </div>       
    );
  }
}