import React, { Component } from 'react'
import RegularComponent from './13b_RegularComponent'
import PureComp from './13a_PureComp'
import MemoComp from './13c_MemoComp'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Bencode'
        }
    }

    componentDidMount(){
        setInterval( ()=> {
            this.setState({
                name: 'Bencode1'
            })
        }, 2000)
    }
    
    render() {
        console.log('******Parent Component Render*********')

        return (
            <div>
                <h1>Parent Component </h1>
            <MemoComp datam={this.state.name} />
            <RegularComponent datar={this.state.name} />
            <PureComp datap={this.state.name} />

            </div>
        )
    }
}

export default ParentComponent


/***
 * the JSX sample that will be in App.js
  <ParentComponent />

 * **/
