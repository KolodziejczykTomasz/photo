import React, { Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

const NavBarMenu = () => (
  <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mr-auto justify-content-center"
          style={{ width: "75vw" }}
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
        <Navbar.Text style={{ width: "150px" }}>
          {" "}
          <FaPhone style={{ marginRight: "15px" }} />
          +48 123 456 789
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
);

export default NavBarMenu;