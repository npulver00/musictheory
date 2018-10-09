import React, { Component } from 'react';
import './App.css';
import InputPhrase from './InputPhrase';
import clouds from './image/clouds.jpg';
import axios from 'axios';
import Header from './Header';
import Weather from './weather';



class App extends Component {
  constructor(){
    super();
    this.state ={
      phrase: [],
      type: '',
      editinput: ""
    }
  }

  componentDidMount(){
  axios.get('/api/peacefulQuotes').then(response => {
    this.setState({phrase:response.data})
   })
  }

  grabData(){
    axios.get('/api/peacefulQuotes').then(response => {
      console.log(response)
      this.setState({ phrase: response.data})
    })
  }

  deleteQuote(id){
        axios.delete(`/api/peacefulQuotes/${id}`).then( response =>{
          console.log(id)
          this.setState({phrase:response.data})
      })
    }

  editQuote(id, quote){
    console.log('editQuote:',quote)
     axios.put(`/api/peacefulQuotes/${id}`, {quote}).then(response => {
         this.setState({phrase:[response.data]})
          
     })
  }

 inputComment(value){
  this.setState({editinput:value})
}
 
  render() {
    console.log(this.state)
    let phraseToDisplay = this.state.phrase.map((element, index) => {
      return (
        <div key = {index}>{element.quote} 
        <div>
          <br/>      
        </div>
        <button className = "editButton" onClick={()=>this.editQuote(element.id, this.state.editinput) }>Edit Quote</button>
        <input className ="inputEdit" placeholder ="edit" onChange={(event) => this.inputComment(event.target.value)}></input>
        <button className = "eraseButton" onClick={()=>this.deleteQuote(element.id) }>Delete</button>
        </div>
      )
    })
    let type = ""
      return (
      <div>
        
        <Header/>
        <div className="main-container">
           
          <div className ="inner-wrapper">

            <div className="quote-wrapper">
               {phraseToDisplay} 
            </div>
              <button onClick={() => this.grabData()} className="quote-button"> Quote </button>       
              <InputPhrase/>
              <Weather/>
          </div>
              
        </div> 
      
      </div>
    );
  }
}

export default App;
