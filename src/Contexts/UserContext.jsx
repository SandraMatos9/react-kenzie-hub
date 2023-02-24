import { createContext, useEffect, useState } from "react";
import { api} from '../services/api'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'


export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    const [infoUserContext,setInfoUserContext] = useState([])


    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(token){
            const userAutoLogin = async () => {
                try {
                    api.defaults.headers.common['Authorization']=`Bearer ${token}`

                    const response = await api.get('/profile')
                    setUser(response.data);
                    setInfoUserContext(response.data.user.techs)
                    navigate('/dashboard')
                } catch (error) {
                    console.log(error)
                    localStorage.clear("@TOKEN")
                }
    
               
            }
             userAutoLogin()
        }
    }, [])


    const userLogin = async (data) => {
        // console.log(data)
        try {
            const response = await api.post('/sessions/', data)
            const id = response.data.id

            toast.success("Login feito com sucesso!")
            localStorage.clear()
            console.log(response.data)
            localStorage.setItem("@USERID", response.data.user.id)
            localStorage.setItem("@TOKEN", response.data.token)
            api.defaults.headers.common['Authorization']=`Bearer ${ response.data.token}`


            setUser(response.data.user.techs)
            setInfoUserContext(response.data.user)
            navigate('/dashboard')


        } catch (error) {

            toast.error("Erro ao logar")
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }

    const userRegister = async (data) => {

        try {
            const response = await api.post('/users', data)
            const id = response.data.id
            console.log(response)

            navigate('/')
            toast.success("Cadastro feito com sucesso!")


        } catch (error) {
            toast.error("Erro ao cadastrar")
        }
    }


    return (
        <UserContext.Provider value={{ userLogin, userRegister, userLogout, user,setInfoUserContext,infoUserContext}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;