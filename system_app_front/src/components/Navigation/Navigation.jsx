import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import brand from "../../assets/images/logoprincipal.png";

export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Container className="text-white">
          <img
            className="d-inline-block align-top"
            height="50px"
            alt="Brand"
            src={brand}
          />
          <Navbar.Brand href="/">Mendez Services</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="/seguridad"
              className="d-inline p-2 bg-dark text-white"
            >
              Seguridad
            </NavLink>
            <NavLink to="/precios" className="d-inline p-2 bg-dark text-white">
              Precios
            </NavLink>
            <NavLink
              to="/sobrenosotros"
              className="d-inline p-2 bg-dark text-white"
            >
              Sobre nosotros
            </NavLink>
            <NavLink to="/service" className="d-inline p-2 bg-dark text-white">
              Servicios
            </NavLink>
            <NavLink to="/board" className="d-inline p-2 bg-dark text-white">
              Tableros
            </NavLink>
          </Nav>
          <Nav className="md-12">
            <NavLink to="/login" className="d-inline p-2 bg-dark text-white">
              Iniciar Sesion
            </NavLink>
            <NavLink to="/signup" className="btn btn-primary" variant="light">
              Probar Gratis
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
