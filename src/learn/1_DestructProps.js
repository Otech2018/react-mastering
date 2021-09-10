//destructuring improves code readbility 
//functional Component is for props
import React from 'react'


//Normal JS PROPS METHODS
/**
 * 
 * //NORMAL JS
 function DestructProps(props) {
    return (
        <div>
            <h1>
                Hello {props.name} aka {props.nickName}
            </h1>
        </div>
    )
}

==============================================================
///ES6 PROPS METHODS

const DestructProps = props => {
    return (
        <div>
            <h1>
                Hello {props.name} aka {props.nickName}
            </h1>
        </div>
    )
}



======================================================================
======================================================================
DESTRUCTURING THE PROPS
======================================================================
======================================================================


//STAGE 1 DESTRUCTURE IN THE FUNCTION PARAMETER
*************************
//NORMAL JS
function DestructProps({name,nickName}) {
    return (
        <div>
            <h1>
            Hello {name} aka {nickName}
            </h1>
        </div>
    )
}


//ES 6
const DestructProps = ({name,nickName}) => {
    return (
        <div>
            <h1>
                Hello {name} aka {nickName}
            </h1>
        </div>
    )
}



//STAGE 2 DESTRUCTURE IN THE FUNCTION BODY
*************************
//NORMAL JS
function DestructProps(props) {
    const {name,nickName} = props
    return (
        <div>
            <h1>
            Hello {name} aka {nickName}
            </h1>
        </div>
    )
}

//ES 6
const DestructProps = props => {
    const {name,nickName} = props
    return (
        <div>
            <h1>
            Hello {name} aka {nickName}
            </h1>
        </div>
    )
}
 * */



const DestructProps = props => {
    const {name,nickName} = props
    return (
        <div>
            <h1>
            Hello {name} aka  {nickName}
            </h1>
        </div>
    )
}

export default DestructProps



/***
 * the JSX sample that will be in App.js
  <DestructProps nickName="Bencode" name="Ajah ogonnaya Benjamin" />
  
 * **/