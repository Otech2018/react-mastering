import react from 'react'
import React from 'react'

function FragmentDemo() {

        /** 
     * 
     *************************************
     Fragement with key
     *************************************
    const items = []
    items.map(
        item =>(
            <React.Fragment key={item.id}>
                <h1>Title</h1>
                <p>{item.title}</p>
            </React.Fragment>
        )
    )

    *****************************************
    SHort Hand Fragement
    *****************************************
    <>
            //this does not use keys
    </>
   **/
    return (
        <React.Fragment>
            <h1>
                Fragement Demo
            </h1>
            <p>Obi is a boy</p>
        </React.Fragment>

    )
}

export default FragmentDemo



/***
 * the JSX sample that will be in App.js
  <FragmentDemo />

 * **/

