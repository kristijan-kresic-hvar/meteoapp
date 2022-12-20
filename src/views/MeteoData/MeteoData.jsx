import { useState, useEffect, useContext } from 'react'

// third party libraries
import PropTypes from 'prop-types'
import moment from 'moment'

import { SettingsContext } from '../../context/settingsContext'

// local components
import Filters from '../../components/Filters/Filters'
import RenderChart from '../../components/RenderChart/RenderChart'

// local hooks
import useFilterState from '../../hooks/useFilterState'
import useMeteoApi from '../../hooks/useMeteoApi'

import dailyFilterOptions from '../../filter_options/daily'
import hourlyFilterOptions from '../../filter_options/hourly'

// local assets
import styles from './MeteoData.module.css'

const MeteoData = ({ selectedCity, onBack }) => {

    const { settings } = useContext(SettingsContext)
    const { filters, handleFilterChange } = useFilterState()

    const { getMeteorologicalData } = useMeteoApi()

    const [filterType, setFilterType] = useState('') // daily, hourly

    const [weatherData, setWeatherData] = useState(null)
    const [series, setSeries] = useState([])
    const [options, setOptions] = useState({})

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

    // call api to get data
    useEffect(() => {
        if (filterType) {
            const getData = async () => {
                const { data, error } = await getMeteorologicalData(selectedCity, filters)
                if (error) return console.log(error)
                setWeatherData(data)
            }
            getData()
        }
    }, [filters, settings])

    useEffect(() => {
        if (weatherData) {

            let dailySeries = []
            let hourlySeries = []

            const timeData = weatherData?.daily ?
                weatherData.daily?.time.map(timestamp => moment(new Date(timestamp)).format('MMM DD')) :
                weatherData.hourly?.time.map(timestamp => moment(new Date(timestamp)).format('MMM DD, HH:mm'))

            if (weatherData.daily) {
                Object.keys(weatherData?.daily).forEach(key => {
                    key !== "time" && dailySeries.push({ name: key, data: weatherData.daily[key] })
                })
            }

            if (weatherData?.hourly) {
                Object.keys(weatherData?.hourly).forEach(key => {
                    key !== "time" && hourlySeries?.push({ name: key, data: weatherData.hourly[key] })
                })
            }

            setOptions(() => {
                return {
                    xaxis: {
                        categories: timeData,
                    },
                    annotations: {
                        xaxis: [
                            filterType === 'daily' ?
                                {
                                    x: moment(new Date()).format('MMM DD'),
                                    borderColor: '#775DD0',
                                    label: {
                                        orientation: 'horizontal',
                                        style: {
                                            background: '#775DD0',
                                            color: '#fff',
                                        },
                                        text: 'Today'
                                    }
                                } :
                                {}
                        ]
                    }
                }
            })

            setSeries(() => {
                return [
                    ...dailySeries,
                    ...hourlySeries
                ]
            })
        }
    }, [weatherData])

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
                        Meteorologic data for {selectedCity.city}
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
                    {weatherData && filters.length > 0 &&
                        <div className="my-20 w-full max-w-[1200px] mx-auto">
                            <small
                                className="text-sm ml-5">
                                Data generated in {weatherData?.generationtime_ms.toFixed(2)} ms,
                                <span> time in {settings.timezone} / utc offset in seconds {weatherData?.utc_offset_seconds}</span>
                            </small>
                            <RenderChart
                                type={"line"}
                                options={options}
                                series={series}
                            />
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

MeteoData.propTypes = {
    selectedCity: PropTypes.object,
    onBack: PropTypes.func.isRequired
}

export default MeteoData