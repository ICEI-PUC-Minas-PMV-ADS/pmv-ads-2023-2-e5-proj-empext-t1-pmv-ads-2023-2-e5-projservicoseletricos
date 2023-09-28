import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  gap: 1%;
  overflow-y: auto;
  height: calc(100vh - 140px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    :hover {
      background-color: #1bbbff;
    }
  }
`;

export const CardSubcategorys = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  border: 1px solid #fff3;
  border-radius: 5px;
  cursor: pointer;
`;

export const TitleCategoryCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100;
  padding: 20px;

  .icon {
    font-size: 25px;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-weight: 500;
  }
`;

export const ModalCategoryCard = styled.div`
  display: flex;
  max-height: 300px;
  height: 100%;
  overflow: auto;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  display: ${(props) => (props.display ? "flex" : "none")};
  padding: 0 20px 20px 20px;

  h3 {
    font-weight: 300;
    color: #fff;
    font-size: 16px;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  margin-top: 20px;
  gap: 10px;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    :hover {
      background-color: #1bbbff;
    }
  }
`;
export const ButtonBack = styled.div`
  display: none;
  cursor: pointer;

  .icon {
    font-size: 25px;
    color: #fff;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;
