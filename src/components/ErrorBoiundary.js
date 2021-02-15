import React, { Component } from 'react'

export class ErrorBoiundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }
    
    static getDerivedStateFromError (error){
        return{
            hasError:true
        }
    }
    render() {
       if(this.state.hasError == true){
           
        return (
            <div>
                <h1>Something went wrong!</h1>
                
            </div>
        )
       }
       return this.props.children;
        
    }
}

export default ErrorBoiundary
