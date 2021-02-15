import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Zak'
        }
    }
    changeState =() =>{
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState}>Subscribe</button>
            </div>
        )
    }
}

export default Message
