import { useState } from 'react'
import AppRoutes from './routes'
import { toast, ToastContainer } from 'react-toastify';



function App() {
  const [user,setUser]= useState({})


  

  return (
    <>
    <AppRoutes user={user} setUser={setUser} />
    <ToastContainer/>

    </>
    
  )
}

export default App
