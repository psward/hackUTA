import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

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

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const Items = () => (
    <div>
        <h2>Items</h2>
    </div>
)

const Recipes = ({ match }) => (
    <div>
        <h2>Recipes</h2>
    </div>
)

export default HeaderBar;
