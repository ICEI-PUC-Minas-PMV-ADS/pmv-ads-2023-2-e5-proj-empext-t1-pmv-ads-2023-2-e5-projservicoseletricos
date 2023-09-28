import styled from "styled-components";

export const FooterStyles = styled.div`
  width: 100%;
  border-top: 1px solid #043C65;
  padding: 30px 20px 10px 20px;

  h2 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
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
    margin-top: 40px;
  }

  @media (max-width: 700px) {
    flex-direction: ${(props) => (props.row ? "row" : "column")};

    .professor {
      margin-top: 0px;
    }
  }
`;

export const InfoMyStock = styled.div`
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
  align-items: left;
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
      a {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export const BaseFooter = styled.div`
  border-top: 1px solid #043C65;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  padding: 10px 0 5px 0;
  gap: 10px;

  p {
    font-size: 14px;
    font-weight: 400;
  }

  img {
    max-width: 150px;
  }
`;
