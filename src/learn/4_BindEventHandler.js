/******
 * 
==============================================
CLASS COMPONEMTS
============================================== 
********************************************
Approach1 binding in the render method
*******************************************
class BindEventHandler extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "Changing the World"
         }
     }

     changeMessage(){
         this.setState({
             message:"Hello BenCode?"
         })
     }
     
    render() {
        return (
            <div>
                <center>
                {this.state.message}
                <br/>
                <button onClick={this.changeMessage.bind(this)}>Click</button>
                </center>
            </div>
        )
    }
}



********************************************
Approach2 Arrow FUnction in the render method
*******************************************

 class BindEventHandler extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "Changing the World"
         }
     }

     changeMessage(){
         this.setState({
             message:"Hello BenCode?"
         })
     }
     
    render() {
        return (
            <div>
                <center>
                {this.state.message}
                <br/>
                <button onClick={() => this.changeMessage()}>Click</button>
                </center>
            </div>
        )
    }
}



********************************************
********************************************
Approach3 Binding in the constructor (Best option)
***********************************************************
This Approach is mostly used even in the official document
************************************************************
class BindEventHandler extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "Changing the World"
         }

        this.changeMessage = this.changeMessage.bind(this)
        //this is mandetory any name can go eg this.bencode
     }

     changeMessage(){
         this.setState({
             message:"Hello BenCode?"
         })
     }
     
    render() {
        return (
            <div>
                <center>
                {this.state.message}
                <br/>
                <button onClick={this.changeMessage}>Click</button>
                </center>
            </div>
        )
    }
}


********************************************
Approach4 Using the Arrow function (class property as arrow function)
********************************************

class BindEventHandler extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "Changing the World"
         }

       
     }

     changeMessage =() => {
         this.setState({
             message:"Hello BenCode?"
         })
     }
     
    render() {
        return (
            <div>
                <center>
                {this.state.message}
                <br/>
                <button onClick={this.changeMessage}>Click</button>
                </center>
            </div>
        )
    }
}

 * 
 * 
 * 
 * 
 * 
 * 
 */










import React, { Component } from 'react'

 class BindEventHandler extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: "Changing the World"
         }

       
     }

     changeMessage =() => {
         this.setState({
             message:"Hello BenCode?"
         })
     }
     
    render() {
        return (
            <div>
                <center>
                {this.state.message}
                <br/>
                <button onClick={this.changeMessage}>Click</button>
                </center>
            </div>
        )
    }
}

export default BindEventHandler







/***
 * the JSX sample that will be in App.js
  <BindEventHandler />

 * **/




