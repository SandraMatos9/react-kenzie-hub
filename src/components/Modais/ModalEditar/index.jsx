import { useForm } from 'react-hook-form'
import { StyledModalEditar } from './modalEditar'
import ReactModal from 'react-modal'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TechContext } from '../../../Contexts/TechContext'
import { UserContext } from '../../../Contexts/UserContext'
import Dashboard from '../../../pages/Dashboard'


const schema = yup.object().shape({
    status: yup.string().required('Status é obrigatório!'),

}).required();

const AddModalEditar = () => {

    const { handleCloseModalEdit, deleteTech, techs, updateTechs, setUpdateTechs, updateTech } = useContext(TechContext)
    const { techsContext, setTechsContext } = useContext(UserContext)
    console.log(updateTechs.id)



    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = async (formData) => {
        await updateTech(formData,updateTechs.id)
    }

   
  
    

    return (

        <>
            <StyledModalEditar>
                <div className='divTituloBotao'>
                    <p> Tecnologia Detalhes </p>
                    <button onClick={handleCloseModalEdit}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor='name'>Nome do projeto</label>
                    <input type="text" value={updateTechs.title} disabled ></input>
                    <p className='pMensagem'>{errors.email?.message}</p>

                    <label htmlFor='name'>Status</label>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <div className='divBtns'>

                        <button type ='submit' className='btnSalvarAlteracoes' onClick={() => techsContext}>Salvar alterações</button>
                        <button type ='button' className='btnExcluir' onClick={() => deleteTech(updateTechs.id)}>Excluir</button>


                    </div>

                </form>

            </StyledModalEditar>

        </>
    )
}
export default AddModalEditar