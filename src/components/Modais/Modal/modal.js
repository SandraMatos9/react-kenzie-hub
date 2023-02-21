import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  width: 369px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  width: 369px;
  height: 360px;
  left: 360px;
  top: 189px;

  & .divTituloBotao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 20px;
    gap: 10px;
    width: 369px;
    height: 50px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;

    & button {
      color: #868e96;
      background-color: #343b41;
      border: none;
    }
  }
  & input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: white;
  }
  & label {
    color: white;
  }

  & select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 329.93px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: white;
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-left: 22px;
    padding-right: 22px;
  }

  & .btnCadastrarModal {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 324px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    flex: none;
    order: 2;
    flex-grow: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
`;
