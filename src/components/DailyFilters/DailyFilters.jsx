import { useState, useEffect } from 'react'

import styles from './DailyFilters.module.css'

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        temperature: false,
        humidity: false,
        pressure: false,
    })

    const handleChange = event => {
        const { name, checked } = event.target
        setFilters(prevFilters => ({ ...prevFilters, [name]: checked }))
    }

    useEffect(() => {
        onFilterChange(filters)
    }, [filters, onFilterChange])

    return (
        <div className={`${styles.dailyFilters}`}>
            <h2>Filters</h2>
            <label htmlFor="temperature">
                <input
                    type="checkbox"
                    id="temperature"
                    name="temperature"
                    checked={filters.temperature}
                    onChange={handleChange}
                />
                Temperature
            </label>
            <br />
            <label htmlFor="humidity">
                <input
                    type="checkbox"
                    id="humidity"
                    name="humidity"
                    checked={filters.humidity}
                    onChange={handleChange}
                />
                Humidity
            </label>
            <br />
            <label htmlFor="pressure">
                <input
                    type="checkbox"
                    id="pressure"
                    name="pressure"
                    checked={filters.pressure}
                    onChange={handleChange}
                />
                Pressure
            </label>
        </div>
    );
}

export default Filters
