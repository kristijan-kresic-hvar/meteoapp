import { useState } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local components
import DailyFilters from '../../components/DailyFilters/DailyFilters'
import HourlyFilters from '../../components/HourlyFilters/HourlyFilters'

// local assets
import styles from './MeteoData.module.css'

const MeteoData = ({ selectedCity }) => {
    const [filters, setFilters] = useState({})
    const [filterType, setFilterType] = useState('') // daily, hourly

    const renderFilters = () => {
        if (filterType) {
            if (filterType === 'daily') {
                return <DailyFilters onFilterChange={setFilters} />
            } else if (filterType === 'hourly') {
                return <HourlyFilters onFilterChange={setFilters} />
            } else {
                return null
            }
        }
    }

    return (
        <div className={`${styles.meteoData}`}>
            <main className="flex flex-col w-full items-center pt-[200px]">
                <h1
                    className="mb-4 text-4xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6x"
                >
                    Meteorologic data for {selectedCity}
                </h1>
                <div className="mt-5 w-2/6 min-w-[300px] max-w-[500px] px-4">
                    <div className="flex flex-col">
                        <select
                            id="timezone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            name="timezone"
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                        >
                            <option hidden>Please select</option>
                            <option value="daily">Daily View</option>
                            <option value="hourly">Hourly View</option>
                        </select>
                    </div>
                </div>
                {renderFilters()}
            </main>
        </div>
    )
}

MeteoData.propTypes = {
    selectedCity: PropTypes.string.isRequired,
}

export default MeteoData