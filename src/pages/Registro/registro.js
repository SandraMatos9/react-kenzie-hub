import styled from "styled-components";
export const StyledDivLogoBotao = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 118px;
  margin-bottom: 28px;
`;

export const StyledMain2 = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 100vh; */
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

  & .pLogin {
    color: #f8f9fa;
    display: flex;
    align-items: center;
    text-align: center;
  }

  & select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
    gap: 8px;
    width: 263px;
    height: 38px;
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868E96;
  }

  & label {
    color: #f8f9fa;
    display: flex;
    margin-right: 200px;
    box-sizing: border-box;
  }
  & .labelSelecMod{
    margin-right: 120px;
  }

  & .labelConfSenha{
    margin-right: 120px;
  }

  & .pMensagem{
    color: var(--Color-primary);
    align-items: center;
    text-align: center;
  }

  & input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    gap: 8.12px;
    width: 263.79px;
    height: 38.38px;
    background: #343b41;
    border-radius: 3.19812px;
    border: 1px #343b41;

  }
  & .pSubtitulo {
    width: 132px;
    height: 17px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 18px;
    color: #868e96;
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
    Form {
      width: 369px;
      height: 502px;
      background-color: red;
    }
  }
`;
