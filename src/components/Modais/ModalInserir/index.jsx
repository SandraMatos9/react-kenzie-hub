import { useForm } from 'react-hook-form'
import { StyledModalEditar } from './modalEditar'
import { useForm } from 'react-hook-form'
import ReactModal from 'react-modal'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TechContext } from '../../Contexts/TechContext'




const schema = yup.object().shape({
    title: yup.string().required('Nome  da tecnologia é obrigatório!'),
    status: yup.string().required('Status é obrigatório!'),

}).required();

const AddModalEditar = () => {

    const { register, handleSubmit } = useForm()

    const AdicionandoTechsModal = () => {
        const {register,handleSubmit} = useForm()
        const {createTech} = useContext(TechContext)
    }


    const submit=(formData) =>{
        createTech(formData)
    }

    return (
        <>
            <StyledModal>
                <div className='divTituloBotao'>
                    <p> Tecnologia Detalhes </p>
                    <button onClick={handleCloseModal}>X</button>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                    <label htmlFor='name'>Nome do projeto</label>
                    <input type="text" placeholder='Material Ul' {...register('name')}></input>
                    <p className='pMensagem'>{errors.email?.message}</p>

                    <label htmlFor='name'>Status</label>
                    <input type='text' placeholder='Material UI' {...register("title")} />
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button className='btnSalvarAlteracoes'>Cadastrar Tecnologia</button>

                    <button className='btnExcluir'>Cadastrar Tecnologia</button>
                </form>

            </StyledModal>

        </>
    )
}
export default AddModalEditar