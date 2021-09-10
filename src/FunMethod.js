import React from 'react'

function FunMethod(props) {
const asa = props.asa
    return (
        <div>
            <button onClick={()=>asa('chijioke')}> GO </button>
        </div>
    )
}

export default FunMethod
 