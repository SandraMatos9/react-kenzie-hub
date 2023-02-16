import logoHub from '../../assets/Logo.svg'
import { StyledBotaoSair } from '../../styles/Button/botaoSair'
import { StyledHeader, StyleDivDashboard } from './home'
import { StyledMain } from '../Home/home'
import {Link, Navigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Dashboard = ({user}) => {
    function AdicionarTech(){

    }

    const userLogout =() =>{
        SpeechSynthesisUtterance(null)
        localStorage.removeItem("@TOKEN")
        Navigate("/")
    }


    return (
        <StyleDivDashboard>
            <StyledHeader>
                <img className="logoBurguer" src={logoHub} />
                <Link to="/"><StyledBotaoSair type='submit'>Sair</StyledBotaoSair></Link>
                userLogout()
            </StyledHeader>
            <StyledMain>
                <div className='divInfoUsuario'>
                    <p className='ptitulo'>Olá {user.name}</p>
                    <p className='pSubtitulo'>{user.course_module}</p>

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





        </StyleDivDashboard>
    )
}
export default Dashboard
