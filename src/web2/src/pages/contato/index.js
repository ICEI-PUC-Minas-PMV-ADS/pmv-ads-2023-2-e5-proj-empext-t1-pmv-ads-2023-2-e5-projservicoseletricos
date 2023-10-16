import React from 'react';
import Header from '../../components/header';  // Importe o componente Header
import Footer from '../../components/footer';  // Importe o componente Footer
import MenuBar from '../../components/menubar';  // Importe o componente MenuBar

function Contato() 
{
  return (
    <div>
      <Header />  {/* Renderize o componente Header */}
      <MenuBar /> {/* Renderize o componente MenuBar */}
      
      {/* Conteúdo da página contatp */}
      <div>
        {/* Seu conteúdo da contato vai aqui */}
      </div>

      <Footer /> {/* Renderize o componente Footer */}
    </div>
  );
}

export default Contato;
