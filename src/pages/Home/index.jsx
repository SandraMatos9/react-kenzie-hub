import logoHub from '../../assets/Logo.svg'
import { StyledBotaoSair } from '../../styles/Button/botaoSair'
import { StyledHeader } from './home'
import { StyledMain } from '../Home/home'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Dashboard = () => {

    function AdicionarTech(){

    }


    return (
        <>
            <StyledHeader>
                <img className="logoBurguer" src={logoHub} />
                <StyledBotaoSair><Link to="/">Sair</Link></StyledBotaoSair>
            </StyledHeader>
            <StyledMain>
                <div className='divInfoUsuario'>
                    <p className='ptitulo'>Olá Samuel Leão</p>
                    <p className='pSubtitulo'>Primeiro módulo introdução ao front end</p>

                </div>
                <div className='divTecnologias'>
                    <p className='pTituloTech'>Tecnologias</p>
                    <button className='btnAdicionarTec'>+</button>
                </div>
                <div className='divCursos'>
                    <ul className='ulCursos'>
                        <li className='liCursos'></li>

                    </ul>

                </div>


            </StyledMain>





        </>
    )
}
export default Dashboard
