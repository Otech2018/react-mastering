import React, { Component } from 'react'

export class RenderPropsCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            coutr: 0
        }
    }
    
    countF =()=>{
        this.setState({
            coutr: this.state.coutr + 1
        })
    }


    render() {
        return (
            <div>
                {this.props.countrt(this.state.coutr, this.countF)}
            </div>
        )
    }
}

export default RenderPropsCounter

/***
 * the JSX sample that will be in App.js
 * 
 * 
  <RenderPropsCounter countrt={(coutr, countF) => (
            <RenderPropsClick coutr={coutr} countF={countF} />
          )} />


          <RenderPropsCounter countrt={(coutr, countF) => (
            <RenderPropsHover coutr={coutr} countF={countF} />
          )} />

 * **/
