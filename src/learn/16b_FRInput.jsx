import React from 'react'

// function FRInput() {
//     return (
//         <div>
//                 <input type="text" name="" id="" />

//         </div>
//     )
// }
//comment the default in other to use an arrow function

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" name="" id="" ref={ref} />

        </div>
    )
})

export default FRInput
