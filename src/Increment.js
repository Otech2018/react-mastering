import React, { Component } from 'react'
//incrementin base on previous state
 class Increment extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 1,
             Addprops: 0
        }
    }


    
    adds(){
    this.setState((Prev,Props)=> ({
        count: Prev.count + 1,
    }))
    } 

    addsp(){
        this.setState((Prev,Props)=> ({
            Addprops: Prev.Addprops + Props.addf
        }))
        } 

    addfive(){
        this.adds()
        this.adds()
        this.adds()
        this.adds()
        this.adds()
        this.adds()
        this.addsp()
    }


    render() {
        return (
            <div>
                Count: {this.state.count} <br/>
                Addprops: {this.state.Addprops} <br/>
                <button onClick={()=>this.addfive()}>Add + 1</button>
            </div>
        )
    }
}

export default Increment
