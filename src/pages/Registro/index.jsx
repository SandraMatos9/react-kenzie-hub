import { useForm } from 'react-hook-form'
import logoHub from '../../assets/Logo.svg'
import StyledBotaoEntrar from '../../components/BotaoEntrar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledBotaoCadastrar } from '../../styles/Button/botaoCadastrar';
import { StyledBotaoVoltar } from '../../styles/Button/botaoVoltar';
import { StyledDivLogoBotao, Form, StyledMain2 } from './registro';
import { useNavigate,Link } from 'react-router-dom'
import { api } from '../../services/api';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    name: yup.string().required('Nome é obrigatório!'),
    email: yup.string().required('Email é obrigatório!'),
    password: yup.string().matches(/(\d)/, 'Deve conter ao menos um número.')
        .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
        .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
        .matches(/(\W|_)/, 'Deve conter no mínimo um símbolo')
        .matches(/.{8,}/, 'A senha deve conter oito caracteres.')
        .required('Senha é obrigatória!'),
        confirmPassword: yup.string().oneOf([yup.ref('password')],'Confirmação de senha deve ser igual a senha.').required('Confirmação de senha é obrigatória.'),

    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!")
}).required();



const Registro = ({ user, setUser, loading, setLoading }) => {
    const { register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });

    const navigate = useNavigate()
    const cadastroUsuario = async (data) => {
        delete data.confirmPassword
        console.log(data)

        try {
            const response = await api.post('/users', data)
            console.log(response)
            const id = response.data.id

            navigate('/')
            toast.success("Cadastro feito com sucesso!")

          


        } catch (error) {
            toast.error("Erro ao cadastrar")
            // reset()
        }
    }


    return (
        <StyledMain2>
            <StyledDivLogoBotao>
                <img className="logoBurguer" src={logoHub} />
                <StyledBotaoVoltar><Link to="/">Voltar</Link></StyledBotaoVoltar>
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


                <label htmlFor='bio'> Bio</label>
                <input type="tex" placeholder="Fale sobre você" {...register("bio")} />
                <p className='pMensagem'>{errors.bio?.message}</p>


                <label htmlFor='contact'>Contato</label>
                <input type="text" placeholder="Opção de contato" {...register("contact")} />
                <p className='pMensagem'>{errors.contact?.message}</p>


                <label className='labelSelecMod'>Selecionar módulo</label>
                <select {...register("course_module")}>
                    <option value="primeiroModulo">Primeiro Módulo</option>
                    <option value="segundoModulo">Segundo Módulo</option>
                    <option value="terceiroModulo">Terceiro Módulo</option>
                </select>


                <StyledBotaoCadastrar>Cadastrar</StyledBotaoCadastrar>

            </Form>

        </StyledMain2>
    )
}
export default Registro