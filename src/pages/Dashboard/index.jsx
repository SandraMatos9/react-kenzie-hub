import logoHub from '../../assets/Logo.svg'
import { StyledBotaoSair } from '../../styles/Button/botaoSair'
import { StyledHeader, StyleDivDashboard } from './home'
import { StyledMain } from './home'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Contexts/UserContext'
import { useContext, useState } from 'react'
import AddModal from '../../components/Modais/Modal/index'
import { TechContext } from '../../Contexts/TechContext'
import AddModalEditar from '../../components/Modais/ModalEditar'

const Dashboard = () => {

    const { handleOpenModalCreate, modalIsOpenCreate,
        handleOpenModalEdit,  modalIsOpenEdit, updateTechs, setUpdateTechs } = useContext(TechContext)
    const { user, infoUserContext} = useContext(UserContext)

    const [updateProp, setUpdateProp] = useState(null)
    const navigate = useNavigate()


    function handleUpdate(tech) {
        setUpdateTechs(tech)
        handleOpenModalEdit()

    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")

        navigate("/")

    }

    const deleteLi = (idRemove) => {
        li.remove()
        updateTechs.remove()
    }
    return (
        <>
            {modalIsOpenCreate && <AddModal />}

            <StyleDivDashboard>
                <StyledHeader>
                    <div className='divImgEBotao'>
                        <img className="logoHub" src={logoHub} />
                        <Link to="/"><StyledBotaoSair type='submit' onClick={userLogout} >Sair</StyledBotaoSair></Link>
                    </div>


                   
                </StyledHeader>
                <StyledMain>
                    <div className='divInfoUsuario'>
                        <p className='ptitulo'>Olá {user?.name}</p>
                        <p className='pSubtitulo'>{user?.course_module}</p>

                    </div>
                    <div className='divTecnologias'>
                        <p className='pTituloTech'>Tecnologias</p>
                        <button className='btnAdicionarTec' onClick={handleOpenModalCreate}>+</button>
                    </div>
                    <div className='divCursos'>
                        {infoUserContext.length > 0 ? (
                            <ul className='ulCursos'>
                                {modalIsOpenEdit && <AddModalEditar />}
                                {infoUserContext.map((tech) => (
                                    <li className='liCursos' key={tech.id} onClick={() => handleUpdate(tech)}>
                                        <p className='pRender'>{tech.title}</p>
                                        <div className='divOptionBtn'>
                                            <option className='pRender' key={tech.id} value={tech.slug} >{tech.status}</option>
                                        </div>
                                        {/* setUpdateProp(tech) */}
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
