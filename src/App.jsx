import React, { useEffect, useState } from 'react';
import ContactForm from './components/contactForm.jsx';
import ContactList from './components/contactList.jsx';
import './styles/Styles.css';

const API_URL = 'http://www.raydelto.org/agenda.php';

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error al obtener contactos:', error);
    }
  };

  const addContact = async (newContact) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContact),
      });
      if (!response.ok) throw new Error('Error al agregar contacto');
      fetchContacts(); // recargar contactos
    } catch (error) {
      console.error(error);
      alert('No se pudo agregar el contacto.');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <div id="AgendaContacto" className="AgendaContacto">
        Agenda de Contactos
      </div>
      <div className="formulario">
        <ContactForm onAddContact={addContact} />
      </div>
      <div id="Contactos" className="Contactos">
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
