import logoHub from '../../assets/Logo.svg'
import { StyledBotaoSair } from '../../styles/Button/botaoSair'
import { StyledHeader, StyleDivDashboard } from './home'
import { StyledMain } from './home'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../Contexts/UserContext'
import { useContext, useState } from 'react'
import AddModal from '../../components/Modais/Modal/index'
import { TechContext } from '../../Contexts/TechContext'

// criar contexto tecnologias, logica do modal vai paratecnologias

const Dashboard = () => {

    const { user } = useContext(UserContext)
    const { techInfo,setTechInfo,handleOpenModal, modalIsOpen } = useContext(TechContext)
    const { profile, setProfile } = useContext(UserContext)

  
    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        Navigate("/")

    }
    return (
        <>
            {modalIsOpen && <AddModal />}

            <StyleDivDashboard>
                <StyledHeader>
                    <div className='divImgEBotao'>
                    <img className="logoHub" src={logoHub} />
                    <Link to="/"><StyledBotaoSair type='submit' onClick={userLogout} >Sair</StyledBotaoSair></Link>
                    </div>
                    
                   
                    userLogout()
                </StyledHeader>
                <StyledMain>
                    <div className='divInfoUsuario'>
                        <p className='ptitulo'>Olá {profile.name}</p>
                        <p className='pSubtitulo'>{profile.course_module}</p>

                    </div>
                    <div className='divTecnologias'>
                        <p className='pTituloTech'>Tecnologias</p>
                        <button className='btnAdicionarTec' onClick={handleOpenModal}>+</button>
                    </div>
                    <div className='divCursos'>
                        {techInfo.length > 0 ? (
                            <ul className='ulCursos'>
                                {techInfo.map((tech) => (
                                    <li className='liCursos'>
                                        {techInfo.id}
                                        <p className='pRender'>{techInfo.title}</p>
                                        <select className='selectRender'>{techInfo.status}
                                            <option>Iniciante</option>
                                            <option>Intermediário</option>
                                            <option>Avançado</option>
                                        </select>
                                    </li>

                                ))}

                            </ul>
                        ) : (
                            <p>Nenhuma tecnologia foi cadastrada ainda.</p>
                        )}

                    </div>

                </StyledMain>
            </StyleDivDashboard>
        </>

    )
}

export default Dashboard
