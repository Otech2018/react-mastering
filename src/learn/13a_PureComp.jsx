import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                Pure COmponent {this.props.datap}
            </div>
        )
    }
}

export default PureComp
