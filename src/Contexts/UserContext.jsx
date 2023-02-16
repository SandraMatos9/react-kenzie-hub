import { createContext, useState } from "react";
import { api } from '../services/api'
import { toast, ToastContainer } from 'react-toastify';



export const UserContext = createContext({});


function UserProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const userLogin = async (data) => {
        try {
            const response = await api.post('/sessions/ ', data)
            const id = response.data.id

            toast.success("Login feito com sucesso!")
            localStorage.clear()
            localStorage.setItem("@USERID", response.data.user.id)
            localStorage.setItem("@TOKEN", response.data.token)
            setUser(response.data.user)

            navigate('/dashboard')


        } catch (error) {

            toast.error("Erro ao logar")
        }
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
        <UserContext.Provider value={{ userLogin, userRegister }}>
            {children}
        </UserContext.Provider>
    )


}

export default UserProvider;