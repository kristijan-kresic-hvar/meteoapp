import { useState, useEffect } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local components
import Filters from '../../components/Filters/Filters'

// local hooks
import useFilterState from '../../hooks/useFilterState'

import dailyFilterOptions from '../../filter_options/daily'
import hourlyFilterOptions from '../../filter_options/hourly'

// local assets
import styles from './MeteoData.module.css'

const MeteoData = ({ selectedCity, onBack }) => {
    const { filters, handleFilterChange } = useFilterState()
    const [filterType, setFilterType] = useState('') // daily, hourly

    const renderFilters = () => {
        if (filterType) {
            if (filterType === 'daily') {
                return (
                    <Filters
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        title="Daily Weather Variables"
                        options={dailyFilterOptions}
                    />
                )
            } else if (filterType === 'hourly') {
                return (
                    <Filters
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        title="Hourly Weather Variables"
                        options={hourlyFilterOptions}
                    />
                )
            } else {
                return null
            }
        }
    }

    useEffect(() => {
        console.log('Filters updated:', filters)
    }, [filters])

    return (
        <div className={`${styles.meteoData}`}>
            <main className="container mx-auto">
                <div className="flex flex-col w-full items-center pt-[100px]">
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-white lg:self-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Go back
                    </button>
                    <h1
                        className="mt-5 mb-4 text-4xl tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6x"
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
                </div>
            </main>
        </div>
    )
}

MeteoData.propTypes = {
    selectedCity: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}

export default MeteoData