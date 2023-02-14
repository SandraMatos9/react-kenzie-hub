import { useForm } from 'react-hook-form'
import logoHub from '../../assets/Logo.svg'
import StyledBotaoEntrar from '../../components/BotaoEntrar';
import { Form, StyledMain } from './login'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, useState } from 'react'
import { StyledBotaoCadastrar } from '../../styles/Button/botaoCadastrar';
import { api } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'



const Login = ({ user, setUser }) => {
    const [loading, setLoading] = []


    const schema = yup.object({
        email: yup.string().email().required('Email é obrigatório!'),
        password: yup.string().matches(/(\d)/, 'Deve conter ao menos um número.')
            .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
            .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
            .matches(/(\W|_)/, 'Deve conter no mínimo um símbolo')
            .matches(/.{8,}/, 'A senha deve conter oito caracteres.')
            .required('Senha é obrigatória!'),

    }).required();


    const { register, handleSubmit,reset,formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate()
    const usuario = async (data) => {
        console.log(data)

        try {
            const response = await api.post('/sessions/ ', data)
            console.log(response)
            const id = response.data.id

            toast.success("Login feito com sucesso!")
            localStorage.clear()
            localStorage.setItem("@USERID",response.data.user.id )
            localStorage.setItem("@TOKEN",response.data.token)
            setUser(data.user)
            navigate('/dashboard')


        } catch (error) {
            console.log('teste')
            
            toast.error("Erro ao logar")
        }
    }

    const onSubmit = (data) => {

        usuario(data)
    }




    return (
    <StyledMain>
        <img className="logoBurguer" src={logoHub} />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <p className='pLogin'>Login</p>

            <label htmlFor='email'>Email</label>
            <input type="text" placeholder="Digite seu Email" {...register("email")} />
            <p className='pMensagem'>{errors.email?.message}</p>


            <label htmlFor='password'>Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register("password")} />
            <p className='pMensagem'>{errors.password?.message}</p>


            <StyledBotaoEntrar />
            <p className='pCadastro'>Ainda não possui cadastro?</p>
            <StyledBotaoCadastrar><Link to ="/registro">Cadastre-se</Link></StyledBotaoCadastrar>

        </Form>

    </StyledMain>
)
}
export default Login
