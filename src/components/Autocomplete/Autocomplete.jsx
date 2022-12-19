import { useState, useMemo } from 'react'

// third party libraries
import PropTypes from 'prop-types'
import { useDebounce } from 'use-debounce'

const Autocomplete = ({ options, onSelect, onFavorite, favorites }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedSearchQuery] = useDebounce(searchQuery, 500)

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value)
    }

    const filteredOptions = useMemo(() => {
        const lowerCaseSearchQuery = debouncedSearchQuery.toLowerCase()
        return options.filter((option) =>
            option.city.toLowerCase().startsWith(lowerCaseSearchQuery)
        )
    }, [options, debouncedSearchQuery])

    function handleOptionSelect(option) {
        setSearchQuery('')
        onSelect(option)
    }

    return (
        <div className="w-full">
            <form>
                <label
                    htmlFor="city-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                    Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-10 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            >
                            </path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="city-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border text-md md:text-lg border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                </div>
            </form>
            {searchQuery.length > 0 && (
                <ul
                    className="w-full mt-3 max-h-[600px] overflow-y-auto bg-gray-50 drop-shadow-lg"
                >
                    {/* Znam da index nije idealna opcija za key, ali da ne dajem nanoid svakom gradu ovako je lakse, a api bi ionako trebao vracati id skupa sa gradom */}
                    {filteredOptions.map((option, index) => (
                        <li className="flex justify-between" key={index}>
                            <button
                                className="w-full text-left hover:bg-gray-100 text-md md:text-lg py-4 px-10"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option.city}
                            </button>
                            <button
                                className="text-2xl md:text-3xl px-8 text-center hover:bg-gray-100"
                                onClick={() => onFavorite(option)}
                            >
                                {favorites.find((item) => item.city === option.city)
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
        city: PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
    })).isRequired,
}

export default Autocomplete