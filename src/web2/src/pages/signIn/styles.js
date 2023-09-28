import styled from 'styled-components'

export const Container = styled.div`
  background-color: #454545;
  width: 100%;
  height: 100vh;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`
export const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  h4 {
    font-weight: 300;
  }
`
export const ContainerImg = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  img {
    width: 100%;
  }
`

export const LeftLogin = styled.div`
  width: 100%;
  flex: 2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  gap: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`
export const RightLogin = styled.div`
  width: 100%;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px;
`
export const MainText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 60px;
  position: fixed h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 45px;
  }
  h4 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  input {
    width: 281px;
    height: 36px;
    border: none;
    border-radius: 5px;
    padding: 15px;
    background-color: #525252;
    color: #f0ffffde;
    font-size: 12px;
    outline: none;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #acacac;
  }

  label {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 5px;
    margin-top: 23px;
  }
`
export const NameField = styled.div`
  display: flex;
`
export const Button = styled.button`
  width: 281px;
  margin-top: 23px;
  padding: 16px 0px;
  border-radius: 5px;
  background-color: #0090cd;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`

export const EndingText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 15px;
  h6 {
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
  }
  a {
    text-decoration: none;
    color: #00abf4;
  }
`
