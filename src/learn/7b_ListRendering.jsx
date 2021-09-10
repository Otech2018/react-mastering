
/**
************************************
FOR ARRAY
****************************************
function List_rendering() {

    const names = ['benjamin','Collins','Silicon', 'Chioma']; 
    return (
        <div>
            {
                //map uses function and here we are using an arrow function
                names.map(name => <h2 key={}>{name} is a name</h2>)
            }
        </div>
    )
}




************************************
FOR JSON OR OBJECT
****************************************


function List_rendering() {

    const data = [
        {
            id: 1,
            name: "benjamin",
            skill: "Developer",
            age: 30
            
        },

        {
            id: 2,
            name: "Chioma",
            skill: "Stylist",
            age: 27
            
        },

        {
            id: 3,
            name: "Collins",
            skill: "Digital Marketer",
            age: 30
            
        },

        {
            id: 4,
            name: "Noble",
            skill: "Writer",
            age: 28
            
        }
    ];
//map uses function and here we are using an arrow function
    const data_list = data.map(info => (
        <h2 key={info.id}>  //or use  index instead of info.if
            My name is {info.name}, i am a {info.skill}, and my age is {info.age}
        </h2>
    ))
    return (
        <div> {data_list } </div>
    )
}



*/














import React from 'react'
import ListData from './7a_ListData'

function ListRendering() {

    const data = [
        {
            id: 1,
            name: "benjamin",
            skill: "Developer",
            age: 30
            
        },

        {
            id: 2,
            name: "Chioma",
            skill: "Stylist",
            age: 27
            
        },

        {
            id: 3,
            name: "Collins",
            skill: "Digital Marketer",
            age: 30
            
        },

        {
            id: 4,
            name: "Noble",
            skill: "Writer",
            age: 28
            
        }
    ];
//Using Two component check listdata.jsx
//Always use key 
    const data_list = data.map(info => <ListData key={info.id} be={info.id} info={info} />)
    return (
        <div> {data_list } </div>
    )
}

export default ListRendering











/***
 * the JSX sample that will be in App.js
  <ListRendering />

 * **/
