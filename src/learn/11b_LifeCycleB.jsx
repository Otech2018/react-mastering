import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bencode'
        }
        console.log('LifeCycleB Constructor')
    }
    

static getDerivedStateFromProps(props, state){
    console.log('LifeCycleB getDerivedStateFromProps')
    return null
}


componentDidMount(){
    console.log('LifeCycleB componentDidMount')
}

shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate')
    return true
}

getSnapshotBeforeUpdate(){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
}

componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')

}
    render() {
        console.log('LifeCycleB Render')

        return (
            <div>
                <div>Life Cycle B </div>
            </div>
        )
    }
}

export default LifeCycleB

/***
 * the JSX sample that will be in App.js
  <LifeCycleB />

 * **/


