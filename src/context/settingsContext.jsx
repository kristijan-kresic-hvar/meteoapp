import { createContext, useState, useEffect } from "react"

const SettingsContext = createContext()

const defaultSettings = {
    temperatureUnit: "celsius",
    windSpeedUnit: "kmh",
    precipitationUnit: "mm",
    timezone: "UTC",
    pastDays: "0",
}

const SettingsProvider = ({ children }) => {

    const [settings, setSettings] = useState(JSON.parse(localStorage.getItem('settings')) || defaultSettings)

    const resetSettings = () => {
        setSettings(defaultSettings)
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