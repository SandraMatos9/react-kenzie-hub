import { useForm } from 'react-hook-form'
import logoHub from '../../assets/Logo.svg'
import StyledBotaoEntrar from '../../components/BotaoEntrar';
import { Form, StyledMain } from './login'
import 'react-toastify/dist/ReactToastify.min.css';
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { UserContext } from '../../Contexts/UserContext';



const Login = () => {

    const { userLogin } = useContext(UserContext)
    const schema = yup.object({
        email: yup.string().email().required('Email é obrigatório!'),
        password: yup.string().matches(/(\d)/, 'Deve conter ao menos um número.')
            .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
            .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
            .matches(/(\W|_)/, 'Deve conter no mínimo um símbolo')
            .matches(/.{8,}/, 'A senha deve conter oito caracteres.')
            .required('Senha é obrigatória!'),

    }).required();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const navigate = useNavigate()

    

    return (
        <StyledMain>
            <img className="logoBurguer" src={logoHub} />
            <Form onSubmit={handleSubmit(userLogin)}>
                <p className='pLogin'>Login</p>

                <label htmlFor='email'>Email</label>
                <input type="text" placeholder="Digite seu Email" {...register("email")} />
                <p className='pMensagem'>{errors.email?.message}</p>


                <label htmlFor='password'>Senha</label>
                <input type="password" placeholder="Digite sua senha" {...register("password")} />
                <p className='pMensagem'>{errors.password?.message}</p>


                <StyledBotaoEntrar />
                <p className='pCadastro'>Ainda não possui cadastro?</p>
                <Link to="/registro"><button className='botaoCadastrarLogin'>Cadastre-se</button></Link>

            </Form>

        </StyledMain>
    )
}

export default Login
