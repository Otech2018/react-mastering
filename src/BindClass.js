import React, { Component } from 'react'

export class BindClass extends Component {

constructor(props) {
    super(props)

    this.state = {
         welcome: "Welcome to Shit park"
    }

    this.shit = this.bindme.bind(this)
}


bindme(){
    this.setState({
        welcome: "Bye Bye"
    })
}

    render() {
        return (
            <div>
                {this.state.welcome} <br/>
                <button onClick={this.bindme.bind(this)}>Exit</button>
                <button onClick={()=>this.bindme()}>Exit</button>
                <button onClick={this.shit}>Exit</button>
                {this.props.children}
            </div>
        )
    }
}

export default BindClass
