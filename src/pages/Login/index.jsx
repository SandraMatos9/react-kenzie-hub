import { useForm } from 'react-hook-form'
import logoHub from '../../assets/Logo.svg'
import StyledBotaoEntrar from '../../components/BotaoEntrar';
import { Form, StyledMain } from '../../styles/login'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, useState } from 'react'
import { StyledBotaoCadastrar } from '../../styles/Button/botaoCadastrar';
import { api } from '../../services/api';


const Login = ({ user, setUser, loading, setLoading }) => {

    const { register, handleSubmit } = useForm();

   

    console.log("Teste",register('abacaxi'))

    return (
        <StyledMain>
            <img className="logoBurguer" src={logoHub} />
            <Form onSubmit={handleSubmit}>
                <p className='pLogin'>Login</p>

                <label>Email</label>
                <input type="text" placeholder="Digite seu Email" {...register("morango")} />

                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" {...register("goiaba")}/>

                <StyledBotaoEntrar />
                <p className='pCadastro'>Ainda não possui cadastro?</p>
                <StyledBotaoCadastrar>Cadastre-se</StyledBotaoCadastrar>

            </Form>

        </StyledMain>
    )
}
export default Login
