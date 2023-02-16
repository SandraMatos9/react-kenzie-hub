import React from 'react'
import { Routes, Route ,Link} from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Home'
import Registro from '../pages/Registro'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/registro' element={<Registro/>} />
            {/* <Route path='*' element={<h1>Página não encontrada</h1>} /> */}
        </Routes>
    )
}
export default AppRoutes