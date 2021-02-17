import React, { Component } from 'react'

export class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    countNumber =()=>{
        this.setState (prevState =>{
            return {count: prevState.count +1 }
        })
    }
    
    render() {
        const {count} = this.state;
        return (
            <div>
                <h1> Total Count is {count}</h1>
                <button onClick={this.countNumber}>Increment</button>
            </div>
        )
    }
}

export default ClickCounter
