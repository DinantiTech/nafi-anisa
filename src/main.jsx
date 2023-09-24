import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider } from 'react-helmet-async'
import HeadCommon from './components/commons/head.common'
import MusicProvider from './providers/music.provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <HeadCommon />
      <MusicProvider>
        <RouterProvider router={router} />
      </MusicProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
