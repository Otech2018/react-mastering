import React, { Component } from 'react'

export class HighOrder extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    addCOunt =()=>{
        this.setState({
            count: this.state.count + 1 
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.addCOunt}>Clicked {count} times</button>
            </div>
        )
    }
}

export default HighOrder


/***
 * the JSX sample that will be in App.js
  <HighOrder />

 * **/