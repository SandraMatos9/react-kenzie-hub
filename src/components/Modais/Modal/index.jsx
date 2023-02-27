import { useForm } from 'react-hook-form'
import { StyledModal } from './modal'
import { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TechContext } from '../../../Contexts/TechContext'



const schema = yup.object().shape({
    title: yup.string().required('Nome  da tecnologia é obrigatório!'),
    status: yup.string().required('Status é obrigatório!'),

}).required();

const AddModal = () => {

    // const { register, handleSubmit } = useForm()

    const { createTech, setTechInfo, handleCloseModalCreate } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = async (formData) => {
        console.log(formData)
        await createTech(formData)


    }

    return (
        <>
                <StyledModal>
                    <div className='divTituloBotao'>
                        <p>Cadastrar Tecnologia</p>
                        <button onClick={handleCloseModalCreate}>X</button>
                    </div>

                    <form onSubmit={handleSubmit(submit)}>
                        <label htmlFor='name'>Nome</label>
                        <input type="text" placeholder='Digite o nome da Tecnologia' {...register('title')}></input>
                        <p className='pMensagem'>{errors.email?.message}</p>

                        <label htmlFor='name'>Selecionar status</label>
                        <select {...register("status")}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>

                        <button className='btnCadastrarModal'>Cadastrar Tecnologia</button>
                    </form>

                </StyledModal>
                setLoading(form)


        </>
    )
}
export default AddModal