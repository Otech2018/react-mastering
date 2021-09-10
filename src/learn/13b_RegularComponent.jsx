import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log('Regular Component Render')

        return (
            <div>
                Regular COmponent {this.props.datar}
            </div>
        )
    }
}

export default RegularComponent
