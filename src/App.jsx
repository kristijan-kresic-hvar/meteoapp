import { useState, useContext } from 'react'

// local components
import SearchCity from './views/SearchCity/SearchCity'
import MeteoData from './views/MeteoData/MeteoData'
import Sidebar from './components/Sidebar/Sidebar'

// context
import { FavoritesContext } from './context/favoritesContext'

// local assets
import styles from './App.module.css'

function App() {
  const { favorites } = useContext(FavoritesContext)
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <div className={`${styles.app} flex`}>
      <Sidebar
        title="Favorites"
        favorites={favorites}
        onSelect={setSelectedCity}
      />
      <div className="w-full">
        {!selectedCity && <SearchCity onCitySelect={setSelectedCity} />}
        {selectedCity && <MeteoData selectedCity={selectedCity} />}
      </div>
    </div>
  )
}

export default App
