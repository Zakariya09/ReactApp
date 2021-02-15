import React, { Component } from 'react'

export class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:''
        }
    }
    changeUsernameHandler = (event)=>{
        this.setState({
            username: event.target.value,
        });
    }
        changePasswordHandler = (event)=>{
            this.setState({
                password: event.target.value
            });
    }
    
    saveForm =(event)=>{
        alert(`Username : ${this.state.username} & Password is ${this.state.password}`);
      event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit= {this.saveForm}>
                    <div>
                        <input type="text" value={this.state.username} onChange={this.changeUsernameHandler} />
                    </div>
                    <div>
                        <input type="text" value={this.state.password} onChange={this.changePasswordHandler} />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms
