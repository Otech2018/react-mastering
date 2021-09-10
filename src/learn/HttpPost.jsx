import React, { Component } from 'react'
import axios from 'axios'  //npm install axios

export class HttpPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }

    chaneValue= e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitH = e =>{
        e.preventDefault()
        // console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state) //post users 2 parameter
        .then( response =>{
            console.log(response)
        })
        .catch( error =>{
            console.log(error)
        })
    }
    
    render() {
        const {userId,title,body} =this.state
        return (
            <div>
                <form onSubmit={this.submitH}>
                   User ID: <input type="text" name="userId"  value={userId} onChange={this.chaneValue}/> <br/><br />
                  Title:  <input type="text" name="title" value={title} onChange={this.chaneValue}/> <br/><br />
                   Body: <input type="text" name="body" value={body} onChange={this.chaneValue}/> <br/><br />

                   <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpPost
