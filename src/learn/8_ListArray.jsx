import React from 'react'

function ListArray() {
    const names = ['benjamin','Collins','Silicon', 'Chioma']; 
    return (
        <div>
            {
                //map uses function and here we are using an arrow function
                names.map((name,index) => <h2 key={index}>{name} is a name</h2>)
            }
        </div>
    )

        }
export default ListArray



/***
 * the JSX sample that will be in App.js
  <ListArray />

 * **/