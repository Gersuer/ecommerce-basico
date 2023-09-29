import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
