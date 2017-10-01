import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Home from './Home';
import Items from './Items';
import Recipes from './Recipes';

// Uses boostrap components to build a header bar...
const HeaderBar = (props) => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">FoodBunk</a>
            <Router>
                <div>
                    <ul>
                        <lu><Link to="/">Home</Link></lu>
                        <lu><Link to="/items">Build your own recipe</Link></lu>
                        <lu><Link to="/recipes">Find a recipe</Link></lu>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/items" component={Items}/>
                    <Route path="/recipes" component={Recipes}/>
                </div>
            </Router>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventkey={1} href="#">Donate</NavItem>
          <NavItem eventkey={2} href="#">Search</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
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

export default HeaderBar;
