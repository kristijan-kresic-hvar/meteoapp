import { useState } from 'react'

const useFilterState = () => {
    const [filters, setFilters] = useState([])

    const handleFilterChange = event => {
        const { value, checked } = event.target
        setFilters(prevFilters => {
            if (checked) {
                return [...prevFilters, value]
            } else {
                return prevFilters.filter(filterValue => filterValue !== value)
            }
        })
    }

    return { filters, handleFilterChange }
}

export default useFilterState