import React, { Component } from 'react'

 class Addprop extends Component {

constructor(props) {
    super(props)

    this.state = {
         total: this.props.num1 +  this.props.num2,
        click: 0
    }
}


Addf(){
    this.setState({
        total: this.state.total + this.props.num2,
        click: this.state.click + 1
    })
}

    render() {
        return (
            <div>

                <h4> Prop Num1  = {this.props.num1}</h4>
                <h4> Prop Num2 = {this.props.num2}</h4>
                <h4> Total {this.state.total}</h4>
                <h4> Click {this.state.click} </h4>

                <button onClick={()=>this.Addf()}>Go</button>
                
            </div>
        )
    }
}

export default Addprop
