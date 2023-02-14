import React from 'react'
import { Routes, Route ,Link} from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Home'
import Registro from '../pages/Registro'


const AppRoutes = ({user,setUser,loading,setLoading}) => {
    return (
        <Routes>
            <Route path='/' element={<Login user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
            <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>} />
            <Route path='/registro' element={<Registro user={user} setUser={setUser} loading={loading} setLoading={setLoading} />} />
            {/* <Route path='*' element={<h1>Página não encontrada</h1>} /> */}
        </Routes>
    )
}
export default AppRoutes