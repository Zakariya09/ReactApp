import React, { Component } from 'react'

export class HoverCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    increment = ()=>{
       this.setState( previous =>{
        return { count: previous.count + 2}
    })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1 onMouseOver={this.increment}>Hover {count} times</h1>
            </div>
        )
    }
}

export default HoverCounter2
