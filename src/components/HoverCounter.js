import React, { Component } from 'react'
import updatedComponent from './WithCounter'

export class HoverCounter extends Component {
    render() {
        const {count, countNumber} = this.props

        return (
            <div>
                <h2 onMouseOver={countNumber}> Hover {count} times</h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter)