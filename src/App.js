import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchField from './SearchField';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

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
      <SearchField
      handleButtonClick = {this.handleButtonClick}
      handleUserInput = {this.handleUserInput}/>
      </div>
    );
  }
}

export default App;
