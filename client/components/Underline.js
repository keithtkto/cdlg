import React, { Component } from 'react'
import Waypoint from 'react-waypoint'


export default class Underline extends Component {
    constructor(){
        super()
        this.state = {
            lineWidth: true
        }
    }
    
    handleWaypointEnter(){
        this.setState({lineWidth: false})
    }


    render(){

        return (<div className={'title-underline '+(this.state.lineWidth || 'title-underline-long')}><Waypoint onEnter={this.handleWaypointEnter.bind(this)}/></div>)
    }
}