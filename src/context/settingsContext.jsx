import { createContext, useState, useEffect } from "react"

const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState(
        JSON.parse(localStorage.getItem('settings')) ||
        {
            temperatureUnit: 'celsius',
            windSpeedUnit: 'km/h',
            precipitationUnit: 'milimeter',
            timezone: 'UTC',
            pastDays: '0',
        }
    )

    const resetSettings = () => {
        setSettings({
            temperatureUnit: 'celsius',
            windSpeedUnit: 'km/h',
            precipitationUnit: 'milimeter',
            timezone: 'UTC',
            pastDays: '0',
        })
    }

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])

    return (
        <SettingsContext.Provider value={{ settings, setSettings, resetSettings }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsProvider, SettingsContext }