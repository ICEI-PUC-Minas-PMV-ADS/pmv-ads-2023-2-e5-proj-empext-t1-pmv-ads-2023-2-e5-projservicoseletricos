import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SelectStyle = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #525252;
  color: #f0ffffde;
  font-size: 12px;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  .icon {
    font-size: 20px;
    color: #fff;
  }
`;

export const Drop = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  max-height: 300px;
  height: auto;
  overflow-y: auto;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #525252;
  color: #f0ffffde;
  box-shadow: 0 0 5px #0006;

  li {
    list-style: none;
    font-size: 12px;
    cursor: pointer;
    width: 100%;
    padding: 10px;
    :hover {
      background-color: #0001;
    }
  }
`;
