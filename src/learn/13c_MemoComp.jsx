import React from 'react'

function MemoComp({datam}) {
    console.log('Memo Component Render')

    return (
        <div>
           Bencode is {datam}
        </div>
    )
}

export default React.memo(MemoComp)  //memo stop the componet from re-rendering 
