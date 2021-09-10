import React from 'react'

function Childcomponent(props) {
    return (
        <div>
            <button onClick={() => props.tesxt('Diala')}>Click</button>
        </div>
    )
}

export default Childcomponent



/***
 * the JSX sample that will be in ParentComponent.js
   <center>
                    {this.state.message}
                    <Childcomponent tesxt={this.bencode} />
                </center>

 * **/