import React, { Component } from 'react'

export class HighOerderHover extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    hoverAction =()=>{
        this.setState({
            count: this.state.count + 1 
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h2 onMouseOver={this.hoverAction}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HighOerderHover



/***
 * the JSX sample that will be in App.js
  <HighOerderHover />

 * **/

