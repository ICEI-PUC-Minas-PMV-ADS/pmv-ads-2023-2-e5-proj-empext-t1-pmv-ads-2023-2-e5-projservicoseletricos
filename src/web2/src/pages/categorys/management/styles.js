import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 62px);
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AlignText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -30px;
  padding: 0 10px;

  @media (max-width: 700px) {
    align-items: flex-start;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  gap: 10px;
  overflow-y: auto;
  height: calc(100vh - 140px);
  margin-top: 40px;
  justify-content: center;

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
