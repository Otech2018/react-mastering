import React, { Component } from 'react'
import Childcomponent from './5a_Childcomponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Helping the world"
        }

        this.bencode = this.ctext.bind(this)
    }

    ctext(name) {
        this.setState({
            message: `Bencode is working with ${name}`
        })
    }
    render() {
        return (
            <div>
                <center>
                    {this.state.message}
                    <Childcomponent tesxt={this.bencode} />
                </center>
            </div>
        )
    }
}

export default ParentComponent



/***
 * the JSX sample that will be in ParentComponent.js
<ParentComponent  />

 * **/
