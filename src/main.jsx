import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider } from 'react-helmet-async'
import HeadCommon from './components/commons/head.common'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <HeadCommon />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
