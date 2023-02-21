import { createContext, useEffect, useState } from "react";
import { api } from '../services/api'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'



export const TechContext = createContext({})


const TechProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [techInfo, setTechInfo] = useState([])
    console.log(techInfo)





    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)

    }

    const createTech = async (data) => {

        console.log(data)
        try {
            // const response = await api.post('/users/techs')

            toast.success("Tecnologia adicionada com sucesso!")
            setTechInfo([...techInfo, {
                // id,
                title: data.title,
                status: data.status
            }])

        } catch (error) {
            console.log

            toast.error("O usuário já possui esta tecnologia criada, basta atualizá-la")
        }
    }


    const updateTech = async (data, dataId) => {
        try {
            const response = await api.put('users/techs/:tech_id ', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const id = response.data.id

            toast.success("Tecnologia atualizada com sucesso!")
            localStorage.clear()
            setLoading(response.data.user)

            const newInfo = techs.map(tech => {
                if (dataId === tech.id) {
                    return { ...tech, ...data }

                } else {
                    return tech

                }
                setTechInfo(newInfo)
            })

        } catch (error) {

            toast.error("O usuário já possui esta tecnologia criada, basta atualizá-la")
            console.log(error)
        }
    }


    const deleteTech = async (dataId) => {
        try {
            const response = await api.delete(`//users/techs/:${dataId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Tecnologia deletada com sucesso!")
            const newLoading = loading.filter(loading => loadConfigFromFile.id !== dataId)
            setLoading(newLoading)


        } catch (error) {

            toast.error("Erro ao deletar")
        }
    }

    return (
        <>

            <TechContext.Provider value={{ loading, setLoading, createTech, deleteTech, updateTech, techInfo, setTechInfo, handleOpenModal, handleCloseModal,modalIsOpen,setIsOpen }}>
                {children}
            </TechContext.Provider>
        </>

    )


}
export default TechProvider