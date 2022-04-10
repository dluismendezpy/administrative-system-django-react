import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import "../styles/Navigation.css"

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" >
        <Container className="text-white">
          
          <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/seguridad">Seguridad</Nav.Link>
            <Nav.Link href="/precios"> Precios </Nav.Link>
            <Nav.Link href="/sobrenosotros">Sobre nosotros</Nav.Link>
          </Nav>
          <Nav className="md-12">
            <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
            <Button href="/registrarse" variant="light">Probar Gratis</Button>
          </Nav>

        </Container>
      </Navbar>
    );
  }
}
