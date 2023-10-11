import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #0B93F6; // fundo barra menu
  padding: 10px 20px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const MenuItem = styled.li`
  font-size: 16px;
  color: #fff; // colar letras barra meun
  cursor: pointer;
  font-weight: 400;

  &:hover {
    font-weight: 500;
  }
`;