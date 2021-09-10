import React from 'react'
import  './style.css'  //for external css
import puty from './app.module.css'  //css module stylesheet
//module works only on the componet where you import it


function Css() {

    //for inline css
    const shit ={
        color: 'red',
        fontSize: '74px'
    }
    return (
        <div>
            <h1 style={shit} >Inline</h1>
            <h1  className='silicon'>External</h1>
            <h1 className={puty.bencode}>Module</h1>
        </div>
    )
}

export default Css


/***
 * the JSX sample that will be in App.js
  <InLineCss />

 * **/




