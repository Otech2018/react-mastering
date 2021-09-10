import React, { Component } from 'react'
import LifeCycleB from './11b_LifeCycleB'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Bencode'
        }
        console.log('LifeCycleA Constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }


    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')

    }


    changeState = ()=>{
        this.setState({
            name: 'Ajah ben'
        })
    }

    render() {
        console.log('LifeCycleA Render')

        return (
            <div>
                <div>Life Cycle A</div>
                <button onClick={this.changeState}>Change</button>
                <LifeCycleB />

            </div>
        )
    }
}

export default LifeCycle

/***
 * the JSX sample that will be in App.js
  <LifeCycle />

 * **/


