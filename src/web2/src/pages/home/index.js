import React from 'react';
import Header from '../../components/header';  // Importe o componente Header
import Footer from '../../components/footer';  // Importe o componente Footer
import MenuBar from '../../components/menubar';  // Importe o componente MenuBar

function Home() {
  return (
    <div>
      <Header />  {/* Renderize o componente Header */}
      <MenuBar /> {/* Renderize o componente MenuBar */}
      
      {/* Conteúdo da página Home */}
      <div>
        {/* Seu conteúdo da Home vai aqui */}
      </div>

      <Footer /> {/* Renderize o componente Footer */}
    </div>
  );
}

export default Home;
