import React from 'react'

function Hello(props) {
    return (
        <div>
            Welcome {props.name} to {props.country}
            <br/>
            chil: {props.children}
        </div>
    )
}

export default Hello