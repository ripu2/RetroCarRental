import React from "react";
import ReactDom from "react-dom";
import "../Styles/navbar.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
class navBar extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Retro Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Pricing">Pricing</Nav.Link>
              <Nav.Link href="#aboutUs">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default navBar;
