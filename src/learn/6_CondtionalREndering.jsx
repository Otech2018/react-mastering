/*

======================================================================
======================================================================
CONDITONAL RENDERING CLASS COMPONENTS
======================================================================
======================================================================


//Approach1 IF/ELSE 
*************************
export class CondtionalREndering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LoggedIn: true
        }
    }


    render() {

        if (this.state.LoggedIn) {
            return (
                <div>
                    <div>Welcome Bencode</div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>Welcome Guest</div>
                </div>
            )
        }

    }
}




//Approach2 Using element variable (better) 
*************************

export class CondtionalREndering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LoggedIn: true
        }
    }


    render() {

        if (this.state.LoggedIn) {
            message = <div>Welcome Bencode</div>
        } else {
            message = <div>Welcome Guest</div>
        }


        return (
            <div>
                {message}
            </div>
        )

    }
}



//Approach3 Terniary (short code of if/else)
**************************************
export class CondtionalREndering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LoggedIn: true
        }
    }


    render() {

        return (
               this.state.LoggedIn ?
               <div>Welcome Bencode</div> :
               <div>Welcome Guest</div>
        )

    }
}



//Approach4 Short circuit Operator (short code of if)
**************************************


import React, { Component } from 'react'

export class CondtionalREndering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LoggedIn: true 
        }
    }


    render() {

        return (
               this.state.LoggedIn && <div>Welcome Bencode</div> 
        )

    }
}
*/


import React, { Component } from 'react'

export class CondtionalREndering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LoggedIn: true 
        }
    }


    render() {

        return (
               this.state.LoggedIn && <div>Welcome Bencode</div> 
        )

    }
}

export default CondtionalREndering







/***
 * the JSX sample that will be in App.js
  <DestructState nickName="Bencode" name="Ajah ogonnaya Benjamin" />

 * **/



