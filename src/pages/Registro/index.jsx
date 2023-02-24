import { useForm } from 'react-hook-form'
import logoHub from '../../assets/Logo.svg'
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledBotaoCadastrar } from '../../styles/Button/botaoCadastrar';
import { StyledBotaoVoltar } from '../../styles/Button/botaoVoltar';
import { StyledDivLogoBotao, Form, StyledMain2 } from './registro';
import { useNavigate, Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';


const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório!'),
    email: yup.string().required('Email é obrigatório!'),
    password: yup.string().matches(/(\d)/, 'Deve conter ao menos um número.')
        .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
        .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
        .matches(/(\W|_)/, 'Deve conter no mínimo um símbolo')
        .matches(/.{8,}/, 'A senha deve conter oito caracteres.')
        .required('Senha é obrigatória!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha.').required('Confirmação de senha é obrigatória.'),

    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!")
}).required();



const Registro = () => {
    const { userRegister } = useContext(UserContext)

    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });

    const navigate = useNavigate()

    const cadastroUsuario = async (data) => {
        delete data.confirmPassword
       await userRegister(data)
    }

        return (
            <StyledMain2>
                <StyledDivLogoBotao>
                    <img className="logoBurguer" src={logoHub} />
                    <Link to="/"> <StyledBotaoVoltar>Voltar</StyledBotaoVoltar></Link>
                </StyledDivLogoBotao>

                <Form onSubmit={handleSubmit(cadastroUsuario)}>
                    <p className='pLogin'>Crie a sua conta</p>
                    <p className='pSubtitulo'>Rápido e grátis, vamos nessa!</p>

                    <label htmlFor='name'>Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                    <p className='pMensagem'>{errors.name?.message}</p>

                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder="Digite aqui seu email" {...register("email")} />
                    <p className='pMensagem'>{errors.email?.message}</p>


                    <label htmlFor='password'>Senha</label>
                    <input type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                    <p className='pMensagem'>{errors.password?.message}</p>


                    <label htmlFor='confirm password' className="labelConfSenha">Confirmar Senha</label>
                    <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
                    <p className='pMensagem'>{errors.confirmPassword?.message}</p>


                    <label htmlFor='bio' className='labelBio'>Bio</label>
                    <input type="tex" placeholder="Fale sobre você" {...register("bio")} />
                    <p className='pMensagem'>{errors.bio?.message}</p>


                    <label htmlFor='contact'>Contato</label>
                    <input type="text" placeholder="Opção de contato" {...register("contact")} />
                    <p className='pMensagem'>{errors.contact?.message}</p>


                    <label className='labelSelecMod'>Selecionar módulo</label>
                    <select {...register("course_module")}>
                        <option value="Primeiro Módulo">Primeiro Módulo</option>
                        <option value="Segundo Módulo">Segundo Módulo</option>
                        <option value="Terceiro Módulo">Terceiro Módulo</option>
                    </select>


                    <StyledBotaoCadastrar>Cadastrar</StyledBotaoCadastrar>

                </Form>

            </StyledMain2>
        )
    }


    export default Registro
