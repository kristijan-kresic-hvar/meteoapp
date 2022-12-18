import { createContext, useState } from "react"

const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState({
        temperatureUnit: 'celsius',
        windSpeedUnit: 'km/h',
        precipitationUnit: 'milimeter',
        timezone: 'UTC',
        pastDays: '0',
    })

    const resetSettings = () => {
        setSettings({
            temperatureUnit: 'celsius',
            windSpeedUnit: 'km/h',
            precipitationUnit: 'milimeter',
            timezone: 'UTC',
            pastDays: '0',
        })
    }

    return (
        <SettingsContext.Provider value={{ settings, setSettings, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsProvider, SettingsContext }