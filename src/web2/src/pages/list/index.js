import React from 'react';
import { Container, Menu, MenuItem } from "./styles";
import { useNavigate } from "react-router";
import Header from '../../components/header';  // Importe o componente Header
import Footer from '../../components/footer';  // Importe o componente Footer
import MenuBar from '../../components/menubar';  // Importe o componente MenuBar
import ProdList from '../../components/ptList';

function ProductList() 
{
  return (
    <div>
      <Header />  {/* Renderize o componente Header */}
      <MenuBar /> {/* Renderize o componente MenuBar */}
      
      {/* Conteúdo da página Home */}
      <div>
        <ProdList />
      </div>

      <Footer /> {/* Renderize o componente Footer */}
    </div>
  );
}

export default ProductList;