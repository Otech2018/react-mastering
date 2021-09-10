import React, { Component } from 'react'

export class RenderPropsUser extends Component {
    render() {
        return (
            <div>
                {this.props.name(true)}
            </div>
        )
    }
}

export default RenderPropsUser
/***
 * the JSX sample that will be in App.js
  <RenderPropsUser />

 * **/