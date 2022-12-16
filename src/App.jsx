import { useState } from 'react'

// local components
import SearchCity from './views/SearchCity/SearchCity'
import MeteoData from './views/MeteoData/MeteoData'

// local assets
import styles from './App.module.css'

function App() {
  const [selectedCity, setSelectedCity] = useState('')

  return (
    <div className={styles.app}>
      {!selectedCity && <SearchCity />}
      {selectedCity && <MeteoData />}
    </div>
  )
}

export default App
