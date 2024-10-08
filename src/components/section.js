import React from 'react';

const Section = ({ id, title, children, isFirstSection = false }) => (
  <section
    id={id}
    className="py-5"
    style={{
      backgroundColor: '#f5f5dc', // Fondo beige
      padding: '0',
      minHeight: '100vh', // Altura mínima
      marginTop: isFirstSection ? '80px' : '0', // Ajuste de margen superior solo para la primera sección
    }}
  >
    <div className="container" style={{ padding: '50px 0' }}>
      <h2 className="mb-4" style={{ color: '#4b2e1e', fontSize: '2.5rem', fontWeight: 'bold', fontFamily: 'Georgia, serif', textAlign: 'left' }}>
        {title}
      </h2>
      <div className="mt-4" style={{ textAlign: 'left' }}>
        {children}
      </div>
    </div>
  </section>
);

export default Section;







