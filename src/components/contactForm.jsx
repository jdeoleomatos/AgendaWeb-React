import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    onAddContact({ nombre, apellido, telefono });
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <button type="submit">Añadir Contacto</button>
    </form>
  );
}

export default ContactForm;
