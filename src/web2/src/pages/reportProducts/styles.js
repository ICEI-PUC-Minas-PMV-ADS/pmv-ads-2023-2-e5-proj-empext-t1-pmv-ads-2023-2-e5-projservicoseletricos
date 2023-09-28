import styled from "styled-components";

export const ContainerReport = styled.div`
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

export const TotalReports = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 20px;

  @media print {
    display: none;
  }
`;

export const ButtonPrint = styled.button`
  background-color: #525252;
  width: fit-content;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  p {
    color: #fff;
    font-size: 14px;
  }
`;

export const ContainerProductsReport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  height: 100%;
`;

export const ProductReportSingle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #fff4;
  padding: 20px 0;

  h2 {
    color: ${(props) => (props.color ? "#000" : "#fff")};
  }

  p {
    color: ${(props) => (props.color ? "#000" : "#fff")};
    font-size: 14px;
  }
`;
