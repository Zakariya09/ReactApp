import React, { Component } from 'react'
import { Child } from "./Child";
export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.getData = this.getData.bind(this);
    }
    getData(data){
        alert( `hey Parent Call  from ${data} `);
    }
    
    render() {
        return (
            <div>
                <Child getHandler = {this.getData}></Child>
            </div>
        )
    }
}

export default Parent
