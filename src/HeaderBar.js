import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
<<<<<<< HEAD
=======
import Donate from './Donate.js';
>>>>>>> 43b75fd5ee96a661d929aae7db496d316a891adb
import { LinkContainer } from 'react-router-bootstrap';

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
<<<<<<< HEAD
          <NavItem eventkey={1} href="#">Search</NavItem>
=======
            <LinkContainer to="/donate">
                <NavItem eventkey={2} href="/donate">Donate</NavItem>
            </LinkContainer>
            <Router>
            <Route path ="/donate" component={Donate}/>
            </Router>
>>>>>>> 43b75fd5ee96a661d929aae7db496d316a891adb
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderBar;
