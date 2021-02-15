import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>hey {this.props.name} Are you {this.props.power} !</h1>
            </div>
        )
    }
}

export default Welcome
