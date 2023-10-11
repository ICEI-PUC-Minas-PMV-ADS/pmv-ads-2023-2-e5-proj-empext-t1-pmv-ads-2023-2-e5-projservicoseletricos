import styled from "styled-components";

export const FooterStyles = styled.div`
  width: 100%;
  border-top: 1px solid #0B93F6;
  padding: 15px 20px 10px 20px;
  background-color: #F0FDFF;
  

  h2 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #000000;
  }

  p {
    font-size: 10px;
    font-weight: 400;
    color: #000000;
  }

  @media print {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;

  .professor {
    margin-top: 6px;
  }

  @media (max-width: 700px) {
    flex-direction: ${(props) => (props.row ? "row" : "column")};

    .professor {
      margin-top: 0px;
    }
  }
`;

export const InfoPolo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  flex: 2;

  p {
    font-size: 12px;
    max-width: 515px;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    justify-content: center;
    text-align: left;

    @media (max-width: 700px) {
      align-items: center;
    }

    li {
      list-style: none;
      margin-top: -8px;
      a {
        font-size: 8px;
        font-weight: 400;
        color: #000000;
      }
    }
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const BaseFooter = styled.div`
  border-top: 1px solid #0B93F6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  padding: 10px 0 5px 0;
  gap: 10px;

  p {
    font-size: 8px;
    font-weight: 400;
  }

  img {
    max-width: 150px;
  }
`;
