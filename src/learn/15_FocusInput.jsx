import React, { Component } from 'react'
import Input from './15a_Input'


export class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()

    }
    
    clickAction = () =>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickAction}>FOcus</button>
            </div>
        )
    }
}

export default FocusInput

/***
 * the JSX sample that will be in App.js
  <FocusInput />

 * **/