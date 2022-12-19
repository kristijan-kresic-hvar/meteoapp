import { useContext } from "react"

import axios from 'axios'

import { SettingsContext } from "../context/settingsContext"

import { queryBuilder } from "../helpers"

const useMeteoApi = () => {
    const { settings } = useContext(SettingsContext)

    const getMeteorologicalData = async (selectedCity, filters) => {
        console.log(selectedCity, "SELECTED CITY")
        const { lat, lng } = selectedCity
        const {
            temperatureUnit: tmpUnit,
            windSpeedUnit: windUnit,
            precipitationUnit: percUnit,
            timezone: tmz,
            pastDays: pastDays,
        } = settings
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&temperature_unit=${tmpUnit}&windspeed_unit=${windUnit}&precipitation_unit=${percUnit}&timezone=${tmz}&past_days=${pastDays}`
        console.log(url, "DEFAULT URL")
        const preparedUrl = queryBuilder(url, filters)

        try {
            const response = await axios.get(preparedUrl)
            return {
                data: response.data,
                error: null,
            }
        }
        catch (error) {
            return {
                data: null,
                error: error,
            }
        }

    }

    return {
        getMeteorologicalData
    }
}

export default useMeteoApi