import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from "./UserContext";



export const TechContext = createContext({})


const TechProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const { techsContext, setTechsContext} = useContext(UserContext)
    const [updateTechs,setUpdateTechs] = useState(null)




    const [modalIsOpenEdit, setIsOpenEdit] = useState(false)

    function handleOpenModalEdit() {
        setIsOpenEdit(true)
    }

    function handleCloseModalEdit() {
        setIsOpenEdit(false)

    }



    const [modalIsOpenCreate, setIsOpenCreate] = useState(false)

    function handleOpenModalCreate() {
        setIsOpenCreate(true)
    }

    function handleCloseModalCreate() {
        setIsOpenCreate(false)

    }

    const createTech = async (data) => {

        console.log(data)
        try {
            const response = await api.post('/users/techs', data)
            toast.success("Tecnologia adicionada com sucesso!")
            setTechsContext([...techsContext,
            response.data
            ])
            console.log(response.data)
        } catch (error) {
            console.log(error)
            toast.error("O usuário já possui esta tecnologia criada, basta atualizá-la")
        }
    }


    const updateTech = async (data, dataId) => {
        try {
            const token = localStorage.getItem("@TOKEN")
            const response = await api.put(`users/techs/${dataId} `, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
 
            // setTechsContext(response.data.techs)

            console.log(response)

            toast.success("Tecnologia atualizada com sucesso!")
            const newTechsUpdate = techsContext.map(tech => {
                if (dataId === tech.id) {
                    return { ...tech, ...data }

                } else {
                    return tech

                }
            })
            setTechsContext(newTechsUpdate)

        } catch (error) {

            toast.error("O usuário já possui esta tecnologia criada, basta atualizá-la")
            console.log(error)
        }
    }


    const deleteTech = async (dataId) => {
        console.log(dataId)
        try {
            const token = localStorage.getItem("@TOKEN")
            // setLoading(true)
            const response = await api.delete(`users/techs/${dataId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia deletada com sucesso!")
            const newTechs = techsContext.filter(tech => tech.id !== dataId)
            setTechsContext(newTechs)
            


        } catch (error) {

            toast.error("Erro ao deletar")
            console.log(error)

        }
        finally {
            setLoading(false)

        }
    }

    return (
        <>

            <TechContext.Provider value={{
                loading, setLoading, createTech, deleteTech, updateTech, handleOpenModalCreate,
                handleCloseModalCreate, modalIsOpenCreate, setIsOpenCreate, handleOpenModalEdit,
                handleCloseModalEdit, modalIsOpenEdit, setIsOpenEdit, updateTechs,setUpdateTechs}}>
                {children}
            </TechContext.Provider>
        </>

    )


}
export default TechProvider