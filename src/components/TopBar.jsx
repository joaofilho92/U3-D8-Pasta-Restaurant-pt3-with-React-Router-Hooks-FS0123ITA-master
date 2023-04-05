// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const TopBar = props => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          {props.brand} — {props.claim}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className={`nav-link ${location.pathname === "/" ? "active fw-bold" : ""}`} to="/">
              Home
            </Link>
            <Link className={`nav-link ${location.pathname === "/menu" ? "active fw-bold" : ""}`} to="/menu">
              Menu
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/prenotazioni" ? "active fw-bold" : ""}`}
              to="/prenotazioni"
            >
              Prenotazioni
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/prenota-tavolo" ? "active fw-bold" : ""}`}
              to="/prenota-tavolo"
            >
              Prenota tavolo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
