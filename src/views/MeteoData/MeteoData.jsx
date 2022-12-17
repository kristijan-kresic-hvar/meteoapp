import { useState } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local components
import DailyFilters from '../../components/DailyFilters/DailyFilters'

// local assets
import styles from './MeteoData.module.css'

const MeteoData = ({ selectedCity }) => {
    const [filters, setFilters] = useState({})
    const [filterType, setFilterType] = useState('daily') // daily, hourly

    return (
        <div className={`${styles.meteoData}`}>
            <main className="flex flex-col w-full items-center pt-[200px]">
                <h1
                    className="mb-4 text-4xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6x"
                >
                    Meteo Data
                </h1>
                <DailyFilters
                    onFilterChange={setFilters}
                />
            </main>
        </div>
    )
}

MeteoData.propTypes = {
    selectedCity: PropTypes.string.isRequired,
}

export default MeteoData