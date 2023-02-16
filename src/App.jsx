import { useState } from 'react'
import AppRoutes from './routes'
import { toast, ToastContainer } from 'react-toastify';
import Login from './pages/Login';



function App() {




  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>

  )
}

export default App
