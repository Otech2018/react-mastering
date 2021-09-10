import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.CbRef = null
        this.setCbRef = element =>{
            this.CbRef = element
        }
    }

    componentDidMount(){
        //set the focus to be on the input text
        //second apporach
        if(this.CbRef){
            this.CbRef.focus()
        }

    //    this.inputRef.current.focus() //first apporach
    }
    
    CheckP=()=>{
        alert(this.inputRef.current.value)
        //get the value of the ref
    }
    render() {
        return (
            <div>
                <input type="text"  ref={this.inputRef} />
                <input type="text"  ref={this.setCbRef} />
                <button onClick={this.CheckP}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

//note Ref only works on class component
//see 15a & 15b for example
/***
 * the JSX sample that will be in App.js
  <RefsDemo />

 * **/