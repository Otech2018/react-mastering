import React, { Component } from 'react'

export class ErrBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    render() {
        if(this.state.hasError){
            return (
                <div>
                    <h1>
                    An Error Ocurred!!!

                    </h1>
                </div>
            )
        }else{
            return this.props.children
        }
        
    }
}

export default ErrBoundary
