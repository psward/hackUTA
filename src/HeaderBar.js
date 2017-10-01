import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import Donate from './Donate.js'
import { LinkContainer } from 'react-router-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

// Uses boostrap components to build a header bar...
const HeaderBar = (props) => {
  return (
      <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">FoodBunk</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
            <LinkContainer to="/donate">
                <NavItem eventkey={2} href="/donate">Donate</NavItem>
            </LinkContainer>
            <Router>
            <Route path ="/donate" component={Donate}/>
            </Router>
          <NavItem eventkey={2} href="#">Search</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const DonateScreen = () => (
    <Donate/>
)

export default HeaderBar;
