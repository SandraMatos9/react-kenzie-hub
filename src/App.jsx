import { useState } from 'react'
import AppRoutes from './routes'
import { toast, ToastContainer } from 'react-toastify';



function App() {
  const [user,setUser]= useState({})
  const [loading,setLoading]=[]


  

  return (
    <>
    <AppRoutes user={user} setUser={setUser} loading={loading} setLoading={setLoading}/>
    <ToastContainer/>

    </>
    
  )
}

export default App
