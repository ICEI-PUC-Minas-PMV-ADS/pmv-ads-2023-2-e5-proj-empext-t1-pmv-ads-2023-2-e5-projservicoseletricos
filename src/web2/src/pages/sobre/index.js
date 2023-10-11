import React from 'react';
import Header from '../../components/header';  // Importe o componente Header
import Footer from '../../components/footer';  // Importe o componente Footer
import MenuBar from '../../components/menubar';  // Importe o componente MenuBar  
import { Content, FooterStyles, InfoPolo, Members, BaseFooter, Container,} from "./styles"; 
     
        
function Sobre() {
    return (
      <div>
        <Header />  {/* Renderize o componente Header */}
        <MenuBar /> {/* Renderize o componente MenuBar */}
        
        {/* Conteúdo da página Home */}
        <div>
          {<InfoPolo>
            <h2>Sobre a Polo</h2>
            <p>
            A Polo é uma empresa de engenharia fundada em 2011 com o objetivo de empreender tanto no ramo de serviços de engenharia elétrica 
            (manutenção, instalação, análise e projetos) como no comércio de materiais e equipamentos elétricos.
            O foco da empresa desde então tem sido a busca por soluções personalizadas à demanda dos nossos clientes..{" "}
            </p>
          </InfoPolo>}
        </div>
  
        <Footer /> {/* Renderize o componente Footer */}
      </div>
    );
  }
  
  export default Sobre;
  
        