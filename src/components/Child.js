import React, { Component } from 'react'


export class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.props.getHandler('child')}>Click Me</button>
            </div>
        )
    }
}

export default Child
