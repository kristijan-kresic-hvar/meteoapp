import { useMemo, useCallback } from 'react'

// third party libraries
import PropTypes from 'prop-types'

// local assets
import styles from './Sidebar.module.css'

const Sidebar = ({ title, favorites, onSelect }) => {
    const handleSelect = useCallback((favorite) => {
        onSelect(favorite)
    }, [onSelect])

    const favoriteElements = useMemo(() => {
        return favorites.map((favorite) => (
            <li
                key={favorite.id}
            >
                <div
                    onClick={() => handleSelect(favorite)}
                    class="flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <p class="ml-3 text-lg">{favorite.name}</p>
                </div>
            </li>
        ))
    }, [favorites])

    return (
        <aside
            className="w-[40%] max-w-[400px] h-screen bg-gray-50 overflow-hidden hover:overflow-y-auto hidden lg:block"
            ariaLabel="Sidebar"
        >
            <div class="flex items-center pl-2.5 mb-5">
                <h4
                    className="mb-4 ml-3 px-3 mt-10 text-3xl tracking-tight leading-none text-gray-500  lg:text-6x"
                >
                    Favorites
                </h4>
            </div>
            {
                favorites.length > 0 && (
                    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
                        <ul class="space-y-2">
                            {favoriteElements}
                        </ul>
                    </div>
                )
            }
        </aside>
    )
}

Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Sidebar




