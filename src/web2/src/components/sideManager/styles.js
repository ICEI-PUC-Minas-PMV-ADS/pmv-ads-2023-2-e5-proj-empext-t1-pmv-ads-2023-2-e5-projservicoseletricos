import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;

  p {
    color: #fff;
    font-weight: 400;
  }
  button {
    background-color: transparent;
    width: fit-content;
    height: 40px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    p {
      font-weight: 300;
      font-size: 15px;
      margin: 0;
      :hover {
        color: #ccc;
      }
    }

    .icon {
      font-size: 30px;
      color: #fff;
    }

    @media (max-width: 700px) {
      p {
        display: none;
      }
    }
  }
`;
