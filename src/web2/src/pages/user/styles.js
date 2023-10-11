import styled from "styled-components";

export const ContainerOptionReport = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const OptionReport = styled.div`
  background-color: #525252;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  p {
    color: #fff;
    font-size: 12px;
  }
`;

export const MenuBarContainer = styled.div`
  background-color: #3498db; /* Cor de fundo azul */
  color: #ffffff; /* Cor do texto branco */
  padding: 10px 20px; /* Espaçamento interno */
  display: flex;
  justify-content: flex-end; /* Alinha os itens à direita */
`;

export const MenuItem = styled.a`
  margin-left: 20px; /* Espaço entre os itens */
  text-decoration: none; /* Sem sublinhado */
  color: #ffffff; /* Cor do texto branco */

  &:hover {
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }
`;