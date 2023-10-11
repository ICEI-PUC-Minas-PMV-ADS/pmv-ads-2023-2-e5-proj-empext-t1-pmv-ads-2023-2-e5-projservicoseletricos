import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #043C65;
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
  color: #fff;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    font-weight: 500;
  }
`;
