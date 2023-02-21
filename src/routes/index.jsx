import React from 'react'
import { Routes, Route, Link, BrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Registro from '../pages/Registro'
import TechProvider from '../Contexts/TechContext'

// import ProtectedRoutes from '../pages/ProtectedRoutes'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            {/* <Route path='/dashboard' element={<ProtectedRoutes/>} /> */}

            <Route path='/dashboard' element={
                <TechProvider>
                    <Dashboard />
                </TechProvider>
            } />

            <Route path='/registro' element={<Registro />} />
        </Routes>
    )
}
export default AppRoutes