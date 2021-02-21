import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment = () =>{
        this.setState( prevoiusState =>{
            return { count: prevoiusState.count + 1}
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.increment}> Increment by {count}</button>
            </div>
        )
    }
}

export default ClickCounter2

