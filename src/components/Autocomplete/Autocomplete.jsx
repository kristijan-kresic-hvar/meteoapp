import { useState, useMemo } from 'react'

// third party libraries
import PropTypes from 'prop-types'

const Autocomplete = ({ options, onSelect, onFavorite, favorites }) => {
    const [searchQuery, setSearchQuery] = useState('')

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value)
    }

    const filteredOptions = useMemo(() => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase()
        return options.filter((option) =>
            option.city.toLowerCase().startsWith(lowerCaseSearchQuery)
        )
    }, [options, searchQuery])

    function handleOptionSelect(option) {
        setSearchQuery('')
        onSelect(option)
    }

    return (
        <div>
            <label>
                Search:
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
            </label>
            {searchQuery.length > 0 && (
                <ul>
                    {/* Znam da index nije idealna opcija za key, ali da ne dajem nanoid svakom gradu ovako je lakse, a api bi ionako trebao vracati id skupa sa gradom */}
                    {filteredOptions.map((option, index) => (
                        <li key={index}>
                            <button onClick={() => handleOptionSelect(option.city)}>
                                {option.city}
                            </button>
                            <button onClick={() => onFavorite(option.city)}>
                                {favorites.find((item) => item.name === option.city)
                                    ? '★'
                                    : '☆'}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

Autocomplete.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,

    })).isRequired,
    onSelect: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
}

export default Autocomplete