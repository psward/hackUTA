import React, { Component } from 'react';
import './App.css';
import SearchField from './SearchField';
import HeaderBar from './HeaderBar';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import Recipes from './Recipes';
import Donate from './Donate.js'

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
        <Router>
          <div>
            <ul className="App-header">
              <lu><Link to="/">Home</Link></lu>
              <lu><Link to="/items">Build your own recipe</Link></lu>
              <lu><Link to="/recipes">Find a recipe</Link></lu>
              <lu><Link to="/donate">Donate</Link></lu>
            </ul>

            <Route exact path="/" component={Home}/>
            <Route path="/items" component={Items}/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/donate" component={Donate}/>
          </div>
        </Router>
      </div>
    );
  }
}
const HomeScreen = () => (
    <Home/>
)

const ItemsScreen = () => (
    <Items/>
)

const RecipesScreen = ({ match }) => (
    <Recipes/>
)
const DonateScreen = () => (
    <Donate/>
)


export default App;
