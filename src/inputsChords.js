// import React, { Component } from "react";
// import axios from "axios";


// class inputsNewPextends Component{

//     constructor(){
//        super();
//        this.state = {
//         newPhrase: [],
//         text:""
//        };    
//     }
    
                    
//     inputPhrase(val){
//         this.setState({ text: val }); 
//         }

//     updateChord(){
//         axios.get(baseUrl, {
//         }).then(response =>{
//             console.log(response)
//             this.setState({newPhrase:response.data});
//         })
//     }
//     render() {
//       const { text } = this.state;
//       const displayChords = this.state.newPhrase.map(function(notes){
//           return <p> {notes}</p>
//       })
//         return(
           
//             <div>
//                 <h4>Chord Selection</h4>
//                 <input className ="Choose a word" 
//                 placeholder = "words of wisdom"
//                 value = {text} onChange = {(event) => this.chooseLyric(event.target.value)} />
//                 <button onClick={()=> this.updateChord()}>Wisdom</button>
//                 {displayChords}
               
//             </div>
          
//         )
//     }
// }

// export default inputsChords;