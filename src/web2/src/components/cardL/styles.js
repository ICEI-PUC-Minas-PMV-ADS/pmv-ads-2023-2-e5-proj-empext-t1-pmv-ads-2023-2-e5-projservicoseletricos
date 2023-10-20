import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  max-width: ${(props) => {
    if (props.max) return "100%";
    else return "32%";
  }};
  width: 100%;
  height: ${(props) => (props.max ? "100%" : "200px")};
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #0B93F6;
  border-radius: 5px;
  margin: 0;

  h2 {
    font-weight: 500;
    font-size: ${(props) => (props.max ? "45px" : "25px")};
  }

  p {
    font-weight: 300;
    font-size: ${(props) => (props.max ? "25px" : "20px")};
  }

  @media (max-width: 1050px) {
    max-width: 50%;
  }

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
