import { Component } from "react";
export class NameInput extends Component {
state = {
          userInput: ""
      }
    handleChange = (e) => {
        console.log(e.target.value)
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(this.state.userInput)
    }
    render() {
        return(
           
           <div>
            <input type= "text" onChange = {this.handleChange} />
            
                   <input 
                   type="text"
                   placeholder="enter text"
                   onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                   value = {this.state.userInput} />
                
              </div>
        )
    }
         
    
}