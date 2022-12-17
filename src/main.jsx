import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FavoritesProvider } from './context/favoritesContext'
import { SettingsProvider } from './context/settingsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </SettingsProvider>
  </React.StrictMode>,
)
