import { createContext, useReducer, useEffect } from "react"

import favoritesReducer from './reducers/favoritesReducer'

const FavoritesContext = createContext()

const FavoritesProvider = ({ children }) => {
    const [favorites, dispatch] = useReducer(favoritesReducer, JSON.parse(localStorage.getItem('favorites')) || [])

    const addFavorite = city => {
        dispatch({ type: 'ADD_FAVORITE', city })
    }

    const removeFavorite = city => {
        dispatch({ type: 'REMOVE_FAVORITE', city })
    }

    const removeAllFavorites = () => {
        dispatch({ type: 'REMOVE_ALL_FAVORITES' })
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            removeFavorite,
            removeAllFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProvider }
