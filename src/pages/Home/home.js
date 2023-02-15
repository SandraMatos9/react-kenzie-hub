import styled from "styled-components";

export const StyleDivDashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  max-width: 775px;
  width:100%
`;

export const StyledHeader = styled.header`
  display: flex;
  background-color: #000000;
  width: 100%;
  height: 73px;
  align-items: center;
 

  & img {
    width: 105px;
    height: 14px;
  }
  & button {
    color: white;
  }
`;
export const StyledMain = styled.main`
  background: #000000;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .divInfoUsuario {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 10px;
    width: 100%;
    height: 131px;
    background: #121214;
    margin-top: #212529;
    margin-bottom: #212529;
    justify-content: space-around;

    & .ptitulo {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }

    & .pSubtitulo {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #868e96;
    }
  }
  & .divTecnologias {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 72px;
    text-align: center;

    & .pTituloTech {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #f8f9fa;
    }

    & .btnAdicionarTec {
      background: #212529;
      border-radius: 4px;
      height: 32px;
      width: 32px;
      border-radius: 4px;
      color: #ffffff;
    }
  }

  & .ulCursos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 22px 19px;
    gap: 16px;
    width: 296px;
    height: 416.37px;
    background: #212529;
    border-radius: 4px;
  }
  & .liCursos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.182px;
    gap: 12.18px;
    width: 279px;
    height: 48.73px;
    background: #121214;
    border-radius: 4.06066px;
  }

  @media (min-width: 800px) {

    .StyleDivDashboard{
      width: 775px;
    }

    .StyledHeader{
      width: 775px;
      background-color: red;
    }

    & .divInfoUsuario {
      flex-direction: row;
      align-items: center;
      text-align: center;
      width: 775px;


    }
    & .divTecnologias {
      width: 100%;
      width: 775px;

    }

    & .ulCursos {
      width: 720px;
    }

    & .liCursos {
      width: 700px;
      height: 49px;
      background: #121214;
      border-radius: 4px;
      margin-bottom: 16px;
    }
  }
`;
