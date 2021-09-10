//destructuring improves code readbility 
//Class Component is for props and State

//Normal  PROPS METHODS
/**
 * 
 export class DestructState extends Component {
    render() {
        return (
            <div>
                <h1>
                Hello {this.props.name} aka  {this.props.nickName}
            </h1>
                
            </div>
        )
    }
}

//NORMAL STATE SAMPLE
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
======================================================================
======================================================================
DESTRUCTURING THE PROPS
======================================================================
======================================================================


// DESTRUCTURE IN THE FUNCTION PARAMETER
*************************


export class DestructState extends Component {
 
    render() {
         const {name,nickName} = this.props
         const {stae1,state2} = this.state
        return (
            <div>
                <h1>
                Hello {name} aka {nickName}
            </h1>
                
            </div>
        )
    }
}

NOTE: the const is inside render()

 * */

import React, { Component } from 'react'


export class DestructState extends Component {
   
    render() {
        const {name,nickName} = this.props
        return (
            <div>
                <h1>
                Hello {name} aka {nickName}
            </h1>
                
            </div>
        )
    }
}

export default DestructState




/***
 * the JSX sample that will be in App.js
  <DestructState nickName="Bencode" name="Ajah ogonnaya Benjamin" />

 * **/
