import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoutes = () => {
    const { user } = userContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/')
        }

    },[])

    return (
        <>
            {user ? <Outlet /> : null}
        </>
    )
}