import { useState, useEffect, useContext } from 'react'

// third party libraries
import PropTypes from 'prop-types'
import axios from 'axios'

// local components
import Autocomplete from '../../components/Autocomplete/Autocomplete'

// context
import { FavoritesContext } from '../../context/favoritesContext'

// local assets
import styles from './SearchCity.module.css'

const SearchCity = ({ onCitySelect }) => {

    const { favorites, addFavorite } = useContext(FavoritesContext)
    const [cities, setCities] = useState([])

    function handleCitySelect(city) {
        onCitySelect(city)
    }

    function handleFavorite(city) {
        addFavorite(city)
    }

    useEffect(() => {
        async function fetchCities() {
            const response = await axios.get('/gradovi.json')
            setCities(response.data)
        }
        fetchCities()
    }, [])

    return (
        <div className={`${styles.searchCity}`}>
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

SearchCity.propTypes = {
    onCitySelect: PropTypes.func.isRequired,
}

export default SearchCity