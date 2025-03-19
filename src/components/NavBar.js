import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src="/camrie_logo.png" alt="Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Bug Report</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown title="eros.montin@gmail.com" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
