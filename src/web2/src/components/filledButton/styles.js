import styled from "styled-components";

export const StyledFilledButton = styled.button`
  width: 100%;
  margin-top: 23px;
  padding: 16px 0px;
  border-radius: 5px;
  background-color: ${(props) => (props.delete ? "#EC6D11" : "#0090cd")};
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
