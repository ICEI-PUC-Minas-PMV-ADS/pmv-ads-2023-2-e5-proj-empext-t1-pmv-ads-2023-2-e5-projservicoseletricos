import styled from "styled-components";

export const Overlay = styled.div`
  top: 0;
  left: 0;
  background-color: #0008;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDelete = styled.div`
  width: 450px;
  height: 500px;
  background-color: #454545;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  z-index: 1000000;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  padding: 20px;
`;


