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
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

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

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <div className={`${styles.searchCity} flex`}>
            <Sidebar
                title="Favorites"
                favorites={favorites}
                onSelect={() => { handleCitySelect }}
            />
            <main className="flex flex-col w-full items-center pt-[200px]">
                <h1
                    className="mb-4 text-4xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6x"
                >
                    Meteo App
                </h1>
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