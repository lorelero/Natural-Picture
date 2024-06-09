import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <Navbar bg="success" variant="dark">
      <Container className="justify-content-center">
        <Nav>
          <Link to="/" className="text-white">
            Home
          </Link>
          |
          <Link to="/favoritos" className="text-white">
            Favoritos
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
