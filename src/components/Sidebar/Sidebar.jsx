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
                    className={`${styles.sidebar} flex items-center cursor-pointer p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                    <p className="ml-3 text-lg">{favorite.city}</p>
                </div>
            </li>
        ))
    }, [favorites])

    return (
        <aside
            className="w-[40%] max-w-[400px] h-screen bg-gray-50 overflow-hidden hover:overflow-y-auto hidden lg:block"
            aria-label="Sidebar"
        >
            <div className="flex items-center pl-2.5 mb-5">
                <h4
                    className="mb-4 ml-3 px-3 mt-10 text-3xl tracking-tight leading-none text-gray-500  lg:text-6x"
                >
                    {title}
                </h4>
            </div>
            {
                favorites.length > 0 && (
                    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
                        <ul className="space-y-2">
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
        id: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default Sidebar




