// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css'; // Importa un archivo CSS para estilos adicionales

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="flex-column align-items-center">
      <Navbar.Brand
        href="#home"
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#f5f5dc',
          fontFamily: 'Georgia, serif',
          textDecoration: 'none',
          textAlign: 'center',
        }}
      >
        Milagros Kucharski - Portafolio ML
      </Navbar.Brand>
      <Nav className="flex-wrap justify-content-center"> {/* Cambiado a flex-wrap y justify-content-center */}
        <Nav.Link as={Button} variant="light" href="#intro" className="btn-custom mx-1">
          Introducción a ML
        </Nav.Link>
        <Nav.Link as={Button} variant="light" href="#data" className="btn-custom mx-1">
          Tratamiento de Datos
        </Nav.Link>
        <Nav.Link as={Button} variant="light" href="#algorithms" className="btn-custom mx-1">
          Algoritmos Lineales
        </Nav.Link>
        <Nav.Link as={Button} variant="light" href="#case-study" className="btn-custom mx-1">
          Caso de Estudio
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;




