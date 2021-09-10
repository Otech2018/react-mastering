import React, { Component } from 'react'
import axios from 'axios'  //npm install axios
import  './style.css'
export class HttpGet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             erroMesg: null
        }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response =>{
            this.setState({ posts: response.data})
        }) //gets the data


        .catch( error=>{
            this.setState({
                erroMesg: 'Error Retriving data'
            })

        }) //catch if there was an error
    }


    render() {
        const { posts, erroMesg} = this.state
        return (
            <div>
                <h1>List Of Post</h1>
                {
                    posts.length ? 
                    posts.map( post=> <div className='silicon' key={post.id}> <h2>{post.title}</h2> {post.body} </div>) :
                    null
                }

                {
                    erroMesg? <div className='error'>{erroMesg}</div>: null
                }
            </div>
        )
    }
}

export default HttpGet

/** 
 Install axios  with //npm install axios and import it 

 import axios from 'axios' 

 **/