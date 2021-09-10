import React, { Component } from 'react'
import FRInput from './16b_FRInput'


export class ParentFrInput extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    
   clickHandler = ()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                    <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default ParentFrInput

/***
 * the JSX sample that will be in App.js
  <ParentFrInput />

 * **/
