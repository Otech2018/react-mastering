import React, { Component } from 'react'

export class RenderPropsClick extends Component {
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
            <button onClick={countF}>Clicked {coutr} times </button>
        )
    }
}

export default RenderPropsClick

/***
 * the JSX sample that will be in App.js
  <RenderPropsClick />

 * **/
