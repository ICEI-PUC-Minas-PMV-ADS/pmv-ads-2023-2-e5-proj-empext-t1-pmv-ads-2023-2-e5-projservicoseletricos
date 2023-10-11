import styled from "styled-components";

export const HeaderStyles = styled.div`
  background-color: #0B93F6; // cor do fundo barra logo header 
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  color: #fff;
  border-bottom: 1px solid #0B93F6; // linha acima da barra de menu
  position: relative;
  align-items: center;

  @media print {
    display: none;
  }

  img {
    max-width: 150px;
    cursor: pointer;
  }

  .hamburguer {
    font-size: 25px;
    display: none;
    cursor: pointer;

    @media (max-width: 700px) {
      display: flex;
    }
  }
`;

export const ContentNav = styled.nav`
  background-color: #0B93F6; // fundo barra categoria
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;

    li {
      list-style: none;
      position: relative;

      p {
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        :hover {
          color: #ccc;
        }
      }
    }

    .user-data {
      display: none;

      @media (max-width: 700px) {
        display: flex;
      }
    }
  }

  @media (max-width: 700px) {
    display: ${(props) => (props.display ? "flex" : "none")};
    position: absolute;
    flex-direction: column;
    top: 50px;
    left: 0;
    width: 100%;
    padding: 20px;
    align-items: flex-start;
    z-index: 100000;
    border-bottom: 1px solid #fff3;

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        list-style: none;
        position: relative;

        a {
          font-size: 14px;
          font-weight: 300;
          cursor: pointer;
          text-decoration: none;
          color: #fff;
          :hover {
            color: #ccc;
          }
        }
      }
    }
  }
`;

export const DataUser = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid #fff3;
  padding-left: 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NameUser = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    color: #ccc;
  }
`;

export const ImageUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;