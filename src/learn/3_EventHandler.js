//we are going to focus on the click event but 
// the concept works forother events as well.
/**
==============================================
FUNCTIONAL COMPONEMTS
============================================== 
function EventHandler() {

    function clickMe() {
        alert('button Clicked Functional component');
    }
    return (
        <div>
            <button onClick={clickMe}> Click</button>
        </div>
    )
}




==============================================
CLASS COMPONEMTS
============================================== 

export class EventHandler extends Component {

     clickMe() {
        alert('button Clicked Class component');
    }

    render() {
        return (
            <div>
                 <button onClick={this.clickMe}> Click</button>
            </div>
        )
    }
}



 * */







import React, { Component } from 'react'

export class EventHandler extends Component {

     clickMe() {
        alert('button Clicked Class component');
    }

    render() {
        return (
            <div>
                 <button onClick={this.clickMe}> Click</button>
            </div>
        )
    }
}

export default EventHandler















/***
 * the JSX sample that will be in App.js
  <EventHandler />

 * **/
