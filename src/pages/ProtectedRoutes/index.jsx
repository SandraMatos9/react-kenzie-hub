import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";


const ProtectedRoutes = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    // useEffect(() => {
    //     if(!user){
    //         navigate('/')
    //     }

    // },[])

    return (
        <>
            {user ? <Outlet /> : <Navigate to="/"/>}
        </>
    )
}
export  default ProtectedRoutes