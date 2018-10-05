import React, { Component } from 'react';
import './App.css';
import inputsChords from './inputsChords';
import synposis from './synposis.js';
import songlist from  './songlist.js';
import favoritelist from './favoritelist.js';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state ={
      fortune: " Awaiting your orders..."
    }
  }
  fetchData(){
    axios.get('/data').then(res => {
      this.setState({
        fortune: res.data
      })
    })
  }

  render() {
    return (
      <div>
          <inputsChords ref = "inputsChords"/>
          <h1>Tell me my fortune</h1>
          <button onClick={() => this.fetchData()}> Fetch Fortune</button>
          <p> {this.state.fortune} </p>
      </div>
    )
  }
}

export default App;
