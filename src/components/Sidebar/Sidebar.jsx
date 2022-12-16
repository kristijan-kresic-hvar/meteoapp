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
                className="text-md md:text-lg mb-5"
                key={favorite.id}
            >
                <button
                    onClick={() => handleSelect(favorite)}
                >
                    {favorite.name}
                </button>
            </li>
        ))
    }, [favorites])

    return (
        <aside
            className={`
                ${styles.sidebar} 
                w-2/5 
                max-w-[320px] 
                min-w-[220px] 
                h-screen 
                bg-[#929292]
                hidden 
                md:block
                text-white
            `
            }
        >
            <div>
                <h2
                    className="text-xl md:text-2xl lg:text-3xl pt-6 pl-3"
                >
                    {title}:
                </h2>

                {favorites.length > 0 && (
                    <div>
                        <ul
                            className="pl-6 pt-6">
                            {favoriteElements}
                        </ul>
                    </div>
                )}
            </div>
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