import { useContext } from 'react'

import { SettingsContext } from '../../context/settingsContext'

import styles from './Settings.module.css'

const Settings = () => {

    const { settings, setSettings } = useContext(SettingsContext)

    const handleChange = (event) => {
        setSettings({
            ...settings,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div className={`${styles.settings} flex flex-col w-full h-full items-center pt-24 pb-10 lg:mb-0`}>
            <h2
                className="mb-4 text-3xl tracking-tight leading-none text-gray-500 md:text-4xl lg:text-6x"
            >
                Application Settings
            </h2>
            <div className="mt-10">
                <h3 className="text-xl mb-5 font-medium text-gray-900 text-center">Temperature Unit</h3>
                <fieldset className="flex">
                    <div className="flex items-center mr-5">
                        <input
                            id="celsius"
                            type="radio"
                            value="celsius"
                            name="temperatureUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.temperatureUnit === 'celsius'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="celsius"
                            className="ml-2 text-md font-medium text-gray-900">
                            Celsius °C
                        </label>
                    </div>
                    <div className="flex items-center mr-5">
                        <input
                            id="fahrenheit"
                            type="radio"
                            value="fahrenheit"
                            name="temperatureUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.temperatureUnit === 'fahrenheit'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="fahrenheit"
                            className="ml-2 text-md font-medium text-gray-900">
                            Fahrenheit °F
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className="mt-10">
                <h3 className="text-xl mb-5 font-medium text-gray-900 text-center">Wind Speed Unit</h3>
                <fieldset className="flex flex-wrap gap-2 justify-center">
                    <div className="flex items-center mr-5">
                        <input
                            id="km/h"
                            type="radio"
                            value="km/h"
                            name="windSpeedUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.windSpeedUnit === 'km/h'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="km/h"
                            className="ml-2 text-md font-medium text-gray-900">
                            km/h
                        </label>
                    </div>
                    <div className="flex items-center mr-5">
                        <input
                            id="m/s"
                            type="radio"
                            value="m/s"
                            name="windSpeedUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.windSpeedUnit === 'm/s'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="m/s"
                            className="ml-2 text-md font-medium text-gray-900">
                            m/s
                        </label>
                    </div>
                    <div className="flex items-center mr-5">
                        <input
                            id="mph"
                            type="radio"
                            value="mph"
                            name="windSpeedUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.windSpeedUnit === 'mph'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="mph"
                            className="ml-2 text-md font-medium text-gray-900">
                            mph
                        </label>
                    </div>
                    <div className="flex items-center mr-5">
                        <input
                            id="kn"
                            type="radio"
                            value="kn"
                            name="windSpeedUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.windSpeedUnit === 'kn'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="kn"
                            className="ml-2 text-md font-medium text-gray-900">
                            kn
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className="mt-10">
                <h3 className="text-xl mb-5 font-medium text-gray-900 text-center">Precipitation Unit</h3>
                <fieldset className="flex">
                    <div className="flex items-center mr-5">
                        <input
                            id="milimeter"
                            type="radio"
                            value="milimeter"
                            name="precipitationUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.precipitationUnit === 'milimeter'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="milimeter"
                            className="ml-2 text-md font-medium text-gray-900">
                            Milimeter
                        </label>
                    </div>
                    <div className="flex items-center mr-5">
                        <input
                            id="inch"
                            type="radio"
                            value="inch"
                            name="precipitationUnit"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            checked={settings.precipitationUnit === 'inch'}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor="inch"
                            className="ml-2 text-md font-medium text-gray-900">
                            Inch
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className="mt-10 w-2/6 min-w-[300px] px-4">
                <div className="flex flex-col">
                    <label
                        className="text-xl mb-5 font-medium text-gray-900 text-center"
                        htmlFor="timezone"
                    >
                        Timezone
                    </label>
                    <select
                        id="timezone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="timezone"
                        value={settings.timezone}
                        onChange={handleChange}
                    >
                        <option value="UTC">UTC</option>
                        <option value="GMT">GMT</option>
                        <option value="EST">EST</option>
                        <option value="CST">CST</option>
                        <option value="MST">MST</option>
                        <option value="PST">PST</option>
                    </select>
                </div>
            </div>
            <div className="mt-10 w-2/6 min-w-[300px] px-4">
                <div className="flex flex-col">
                    <label
                        className="text-xl mb-5 font-medium text-gray-900 text-center"
                        htmlFor="pastDays"
                    >
                        Past Days
                    </label>
                    <select
                        id="pastDays"
                        name="pastDays"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={settings.pastDays}
                        onChange={handleChange}
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="7">1 week</option>
                        <option value="14">2 weeks</option>
                        <option value="31">1 month</option>
                    </select>
                </div>
            </div>
            <div className="mt-20 lg:mt-32 w-4/6">
                <div className="flex flex-col sm:flex-row justify-between max-w-[380px] mx-auto gap-3">
                    <button
                        type="button"
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Revert settings to default
                    </button>
                    <button
                        type="button"
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Delete favourites
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settings