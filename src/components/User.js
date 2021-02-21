import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name(false)}</h1>
            </div>
        )
    }
}

export default User
