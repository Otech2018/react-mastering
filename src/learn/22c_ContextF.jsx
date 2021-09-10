import React, { Component } from 'react'
import {UserConsumer} from './22d_ContextUser'

export class ContextF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=>{
                        return(
                            <div>Hello {username}</div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ContextF
