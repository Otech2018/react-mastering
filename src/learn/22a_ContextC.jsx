import React, { Component } from 'react'
import ContextE from './22b_ContextE'

export class ContextC extends Component {
    render() {
        return (
            <div>
           <ContextE />
                
            </div>
        )
    }
}

export default ContextC

/***
 * the JSX sample that will be in App.js
   <UserProvider value="Bencode">
            <ContextC />
          </UserProvider>

 * **/

