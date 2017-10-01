import React from  'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
    </Navbar>
  )
}

export default HeaderBar;
