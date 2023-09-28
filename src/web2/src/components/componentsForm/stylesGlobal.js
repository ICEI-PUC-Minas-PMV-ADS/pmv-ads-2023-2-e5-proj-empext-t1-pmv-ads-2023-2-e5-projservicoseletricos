import styled from "styled-components";

export const Container = styled.div`
  background-color: #0776C7;
  width: 100%;
  height: 100vh;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

export const ContainerText = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  h4 {
    font-weight: 300;
  }
`;

export const Text = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
`;

export const ContainerImg = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  img {
    width: 100%;
  }
`;

export const LeftLogin = styled.div`
  width: 100%;
  flex: 2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  gap: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const RightLogin = styled.div`
  max-width: 450px;
  width: 100%;
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;

export const TextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MainText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  h4 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #0B93F6;
  color: #f0ffffde;
  font-size: 12px;
  outline: none;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const EndingText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 15px;
  text-align: center;
  margin-top: 20px;
  h3 {
    font-weight: 400;
    line-height: 15px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #00abf4;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #0B93F6;
  color: #f0ffffde;
  font-size: 12px;
  outline: none;
`;

export const ContainerPassword = styled.div`
  position: relative;
  width: 100%;

  .eye {
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }
`;
