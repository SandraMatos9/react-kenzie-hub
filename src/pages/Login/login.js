import styled from "styled-components";
export const StyledMain = styled.main`
  background: #000000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;


export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 33px 17px;
  gap: 17px;
  width: 296px;
  height: 402px;
  background: #212529;
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;

  & .pMensagem{
    align-items: center;
    text-align: center;
    color:var(--Color-primary)
    
  }

  & .pLogin {
    color: #f8f9fa;
    display: flex;
    align-items: center;
    text-align: center;
  }

  & label {
    color: #f8f9fa;
    display: flex;
    margin-right: 210px;
    box-sizing: border-box;
  }

  & input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;
    gap: 8.14px;
    width: 264.66px;
    height: 38.5px;
    background: #343b41;
    border: 0.9772px solid #f8f9fa;
    border-radius: 3px;
  }

  & .pCadastro {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: #868E96;
  }
  @media(min-width: 800px){
    .Form{
      width: 369px;
      height: 502px;
      background-color: red;
    }
  }
`;
