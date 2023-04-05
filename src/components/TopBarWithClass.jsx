// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import { Component } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import withRouter from "../helpers/withRouter";
// Link genera un tag <a /> speciale, che grazie alla prop "to" redireziona
// l'utente alla rotta desiderata senza far ri-aggiornare il browser

class TopBar extends Component {
  // const location = useLocation();
  // console.log("LOCATION", location);
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            {this.props.brand} — {this.props.claim}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className={`nav-link ${this.props.location.pathname === "/" ? "active fw-bold" : ""}`} to="/">
                Home
              </Link>
              <Link
                className={`nav-link ${this.props.location.pathname === "/menu" ? "active fw-bold" : ""}`}
                to="/menu"
              >
                Menu
              </Link>
              <Link
                className={`nav-link ${this.props.location.pathname === "/prenotazioni" ? "active fw-bold" : ""}`}
                to="/prenotazioni"
              >
                Prenotazioni
              </Link>
              <Link
                className={`nav-link ${this.props.location.pathname === "/prenota-tavolo" ? "active fw-bold" : ""}`}
                to="/prenota-tavolo"
              >
                Prenota tavolo
              </Link>
            </Nav>
            <Button onClick={() => this.props.navigate("/menu")}>go to menu</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(TopBar);
