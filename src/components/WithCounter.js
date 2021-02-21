import React from "react";

const updatedComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
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
        
         render(){
             return <OriginalComponent count= {this.state.count} countNumber={this.countNumber} {... this.props}></OriginalComponent>
         }
    }
    return NewComponent
}
 export default updatedComponent
