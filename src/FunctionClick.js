import React from 'react'

function FunctionClick() {
    function Ada(){
        alert('Hello Ndi Uwa')
    }

    return (
        <div>
            <button onClick={Ada}>Fun Click </button>
        </div>
    )
}

export default FunctionClick
