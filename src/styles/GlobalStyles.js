import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343B41;
    --Grey-1:#868E96;
    --Grey-0:#F8F9FA;

}
body{
    background: #000000;


}
main{
    background: #000000;
    padding-bottom: 10px;
    padding-top: 10px;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
}

@media (min-width: 800px){
    flex-direction: none;
}
input{
    color: var(--Grey-0);
}



button{
    cursor: pointer;
}


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

body{
    font-family: 'Inter', sans-serif;
}
`;
