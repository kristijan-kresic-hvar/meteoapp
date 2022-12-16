import { useState, useEffect } from 'react'

// third party libraries
import { nanoid } from 'nanoid'

// local components
import Sidebar from '../../components/Sidebar/Sidebar'
import Autocomplete from '../../components/Autocomplete/Autocomplete'
import axios from 'axios'

// local assets
import styles from './SearchCity.module.css'

const SearchCity = () => {

    const [cities, setCities] = useState([])
    const [selectedCity, setSelectedCity] = useState(null)
    const [favorites, setFavorites] = useState([])

    function handleCitySelect(city) {
        setSelectedCity(city)
    }

    function handleFavorite(option) {
        if (favorites.find(item => item.name === option)) return setFavorites(favorites.filter(item => item.name !== option))
        setFavorites([...favorites, { id: nanoid(), name: option }])
    }

    useEffect(() => {
        async function fetchCities() {
            const response = await axios.get('/gradovi.json')
            setCities(response.data)
        }
        fetchCities()
    }, [])

    return (
        <div className={`${styles.SearchCity} flex`}>
            <Sidebar
                title="Favorites"
                favorites={favorites}
                onSelect={() => { handleCitySelect }}
            />
            <main className="flex flex-col w-full border-4 items-center pt-[200px]">
                <h1 className={styles.searchCity__heading}>Meteo App</h1>
                <div className="w-5/6 max-w-[1000px] mt-10">
                    <Autocomplete
                        options={cities}
                        onSelect={handleCitySelect}
                        favorites={favorites}
                        onFavorite={handleFavorite}
                    />
                </div>
            </main>
        </div>
    )
}

export default SearchCity