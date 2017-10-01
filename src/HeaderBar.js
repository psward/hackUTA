import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderBar;
