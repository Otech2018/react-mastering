import React, { Component } from 'react'
import FunMethod from './FunMethod'

export class ClassMethod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             welcome: "Ajah ogonnaya"
        }
      
         this.rendert = this.rendert.bind(this)
    }
    

    rendert(yam){
        this.setState({
            welcome: `Benjamin from ${yam}`
        })
    }
    render() {
        this.we = this.state.welcome
        return (
            <div>
                Welcome {this.we}  <br/>
                <FunMethod asa={this.rendert}/>
            </div>
        )
    }
} 

export default ClassMethod
