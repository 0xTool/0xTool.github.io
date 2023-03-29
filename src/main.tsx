import React from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter as RouterPrvoider } from 'react-router-dom'

import App from './App'
import AppThemeProvider from './contexts/Theme'
import { DAppProvider } from './contexts/dApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterPrvoider>
      <DAppProvider>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </DAppProvider>
    </RouterPrvoider>
  </React.StrictMode>
)
