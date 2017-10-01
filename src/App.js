import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField';
import HeaderBar from './HeaderBar';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      searchResponse: []
    }
  }

  handleButtonClick =() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=${this.state.userInput}')
    .then(response => response.json())
    .then(response => this.setState({ searchResponse: response.items }))
  }

  handleUserInput = (event) => {
    console.log(event.target.value);
    this.setState({ userInput: event.target.value })
  }

  render() {
    return (
      <div className="App">
      <HeaderBar/>
      <SearchField
      handleButtonClick = {this.handleButtonClick}
      handleUserInput = {this.handleUserInput}/>
      </div>
    );
  }
}

export default App;
