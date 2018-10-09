import React, { Component } from 'react';
import axios from 'axios';

export default class InputaddedPhrase extends Component {
     
    constructor(props){
       super(props);
     this.state ={
       type: "",
       addedPhrase: []
     }
    }
    
    handlePost(value){
      axios.post('/api/peacefulQuotes', {value}).then(response =>{
        console.log(response.data)
        this.setState({addedPhrase:response.data})
        alert("Quote Submitted!")
      })
    }
  
    inputaddedPhrase(value){
        console.log(value)
        this.setState({ type: value });
    }
     
        
            render(){

              let phraseToDisplay = this.state.addedPhrase.map((element, index) => {
                return (
                  <div key = {index}>{element.quote}</div>
                )
              })

              return (
                 <div>
                   {/* {phraseToDisplay} */}
                   <div className= "boxData">
                   
                   <input className ="newButton" 
                        placeholder = "wisdom"
                        value = {this.state.type} onChange = {(event) => this.inputaddedPhrase(event.target.value)} />
                        <button onClick={()=> this.handlePost(this.state.type)}>Submit New Quote</button>
                      </div>
                </div>
              );              
            }
          
          
    
    
          }
        
  

