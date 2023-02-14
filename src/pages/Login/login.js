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
  background: #212529;
  box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;

  & .botaoCadastrarLogin {
    background-color: #868e96;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    gap: 10px;
    width: 259px;
    height: 38px;
    left: 0px;
    top: 0px;
    border: 1px solid #868e96;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
    color: #f8f9fa;
  }

  & .pMensagem {
    align-items: center;
    text-align: center;
    color: var(--Color-primary);
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
    border: 1px #343b41;
    border-radius: 3px;
  }

  & .pCadastro {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 9.62602px;
    line-height: 14px;
    color: #868e96;
  }
  @media (min-width: 800px) {
    .Form {
      width: 369px;
      height: 502px;
      background-color: red;
    }
  }
`;
