import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            topic: 'react',
            comment: ''
        }
    }

    pusername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    pcomment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }


    ptopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }


    submit = (event) => {
        alert(`comment is ${this.state.comment} and username is ${this.state.username} while topic is ${this.state.topic}`)
        event.preventDefault();  //prevent the page from reloading
    }

    render() {
        const {username,topic,comment} = this.state;
        return (
            <div>
                <form action="" onSubmit={this.submit}>
                    <div>
                        <label>Username :</label>
                        <input type="text" value={username} onChange={this.pusername} />
                    </div>
                    <br /><br />
                    <div>
                        <label>Comment :</label> <br />
                        <textarea name="" id="" cols="30" rows="10" value={comment} onChange={this.pcomment}></textarea>

                    </div>


                    <div>
                        <label>Topic :</label> 
                        <select name="" value={topic}  onChange={this.ptopic}   id="">
                            <option value="React">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Laravel">Laravel</option>
                            <option value="PHP">PHP</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
/***
 * the JSX sample that will be in App.js
  <Form />

 * **/