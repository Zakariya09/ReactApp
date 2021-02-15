import React from 'react'

export default function Greet(props) {
    return (
        <div>
            <h1>Hello {props.name} are you {props.power}? </h1>
        </div>
    )
}
