import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 d-flex flex-column justify-content-center align-items-center">
      <p className="mb-1">© 2024 Milagros Kucharski - Todos los derechos reservados</p>
      <p className="mb-1">
        Hecho con <a href="https://www.gatsbyjs.com" className="text-white" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </p>
      <p>
        Contacto: <a href="mailto:milagros.kucharski@correo.ucu.edu.uy" className="text-white">milagros.kucharski@correo.ucu.edu.uy</a>
      </p>
    </footer>
  );
};

export default Footer;

