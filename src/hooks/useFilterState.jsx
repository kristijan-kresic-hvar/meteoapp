import { useState } from 'react'

const useFilterState = () => {
    const [filters, setFilters] = useState([])

    const handleFilterChange = event => {
        const { value, checked, name } = event.target
        setFilters(prevFilters => {
            if (checked) {
                if (name === 'daily') {
                    return [...prevFilters, { daily: { ...prevFilters.daily, value } }]
                }
                else if (name === 'hourly') {
                    return [...prevFilters, { hourly: { ...prevFilters.daily, value } }]
                }
            } else {
                return prevFilters.filter(filter => filter[name]?.value !== value)
            }
        })
    }

    return { filters, handleFilterChange }
}

export default useFilterState