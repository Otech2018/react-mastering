import React, { Component } from 'react'

 class Objprop extends Component {

constructor(props) {
    super(props)

    this.state = {
         count: 123
    }
}


    
    render() {
        return (
            <div>
                <h1> {this.state.count}</h1>
                <h1> {this.props.name}</h1>
            </div>
        )
    }
}

export default Objprop
