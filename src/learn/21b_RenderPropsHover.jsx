
import React, { Component } from 'react'

export class RenderPropsHover extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         coutr: 0
    //     }
    // }
    
    // countF =()=>{
    //     this.setState({
    //         coutr: this.state.coutr + 1
    //     })
    // }
    render() {
        const {coutr, countF} = this.props
        return (
            <h1 onMouseOver={countF}>Hover {coutr} times </h1>
        )
    }
}

export default RenderPropsHover

/***
 * the JSX sample that will be in App.js
  <RenderPropsHover />

 * **/

