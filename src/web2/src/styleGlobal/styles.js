import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 62px);


  @media (max-width: 700px) {
    flex-direction: column;
  }

  p {
    text-align: center;
    margin-top: 30px;
  }
`;

export const CenterSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

export const DivRow = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "none"};
  justify-content: ${(props) => props.justifyContent || "none"};
  align-items: center;
  
`;

export const TitlePages = styled.h1`
  font-weight: 400;
  margin-top: ${(props) => props.marginTop || "none"};
  

  span {
    color: #1bbbff;
  }
`;

export const DescriptionPages = styled.p`
  font-weight: 300;
  font-size: 14px;
  
`;

export const InputsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #525252;
  color: #f0ffffde;
  font-size: 12px;
  outline: none;
  
`;
