import React, { Component } from 'react'
import updatedComponent from './WithCounter'

export class ClickCounter extends Component {
   
    render() {
        const {count, countNumber} = this.props
        console.log(this.props.name);
        return (
            <div>
                <h1> Total Count is {count}</h1>
                <button onClick={countNumber}>Increment</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter) 
