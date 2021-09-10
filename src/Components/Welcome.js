import React, { Component } from 'react'
//changing the state
export class Welcome extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'WElcome to website'
        }
    }


    setMessage(){
        this.setState({
             message:'Big Man'
        }, ()=>{alert(this.state.message)})
        alert(this.state.message)
    } 

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.setMessage()}>CLick</button>
                <br/>
               
                
            </div>
        )
    }
}

export default Welcome
