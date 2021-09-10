import React, { Component } from 'react'

 class ClassClick extends Component {

    clickr(){
        alert('developing the world')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickr}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
