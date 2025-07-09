import React from 'react';

function ContactList({ contacts }) {
  return (
    <>
      {contacts.map((contacto, index) => (
        <div key={index} className="contact-card">
          <strong>
            {contacto.nombre} {contacto.apellido}
          </strong>
          <br />
          <span>{contacto.telefono}</span>
        </div>
      ))}
    </>
  );
}

export default ContactList;
