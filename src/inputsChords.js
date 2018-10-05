import React, { Component } from "react";

class inputsChords extends Component{

    constructor(){
       super();
       this.state = {
        chords: [],
        genre: [],
        artisits: []
       }
       
    
    }

    render() {
        const { text } = this.state;
      
        return(
           
            <div>
                {/* input box and button for chords */}
                <h4>inputsChords</h4>
                <input className ="chooseChords" 
                placeholder = "E#_Bb_F"
                value = {text} onChange = {(event) => this.chooseChords(event.target.value)} />
                <button onClick={(event)=> this.updateChord(event.target.value)}>Key!</button>/>
 
               
            </div>
          
        )
    }
}

export default inputsChords;