import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MenuBar from '../../components/menubar';

function Contato() {
  const phoneNumber = "1234567890"; // Número de telefone, incluindo o código do país

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div>
      <Header />
      <MenuBar />

      <div>
        <button onClick={openWhatsApp}>
          <FontAwesomeIcon icon={faWhatsapp} /> Abrir WhatsApp
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Contato;


