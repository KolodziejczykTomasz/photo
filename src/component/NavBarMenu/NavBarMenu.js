import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

const NavBarMenu = () => (
  <Fragment >   
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand href="#home" style={{backgroundColor: "#fff"}}>Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav
          className="mr-auto justify-content-center"
          style={{ width: "80vw", marginTop: 20, marginBottom: 20, backgroundColor: "#fff", textTransform: "uppercase" }}
        >
          <Nav.Link style={{ width: "100px" }} href="/">
            Home
          </Nav.Link>
          <Nav.Link style={{ width: "100px" }} href="/about">
            About
          </Nav.Link>
          <Nav.Link style={{ width: "100px" }} href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="mr-auto justify-content-end">
        <Navbar.Text style={{ width: "250px", backgroundColor: "#fff" }} >        
          <FaPhone style={{ marginRight: "15px" }} />
          +48 123 456 789
        </Navbar.Text>
      </Navbar.Collapse>
      </Navbar>    
  </Fragment>
);

export default NavBarMenu;