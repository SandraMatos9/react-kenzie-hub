import { createContext, useEffect, useState } from "react";
import { api, token } from '../services/api'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'




export const UserContext = createContext({});


function UserProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const userAutoLogin = async () => {
            try {
                const response = await api.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })
                setProfile(response.data);
                navigate('/dashboard')
            } catch (error) {
                console.log(error)
                localStorage.clear("@TOKEN")
            }

           
        }
         userAutoLogin()
    }, [token])


    const userLogin = async (data) => {
        // console.log(data)
        try {
            const response = await api.post('/sessions/ ', data)
            const id = response.data.id

            toast.success("Login feito com sucesso!")
            localStorage.clear()
            console.log(response.data)
            localStorage.setItem("@USERID", response.data.user.id)
            localStorage.setItem("@TOKEN", response.data.token)
            setUser(response.data.user)
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
        <UserContext.Provider value={{ userLogin, userRegister, userLogout, user, profile, setProfile }}>
            {children}
        </UserContext.Provider>
    )


}

export default UserProvider;