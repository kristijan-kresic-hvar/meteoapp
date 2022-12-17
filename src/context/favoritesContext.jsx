import { createContext, useState, useEffect } from "react"

import { nanoid } from 'nanoid'

const FavoritesContext = createContext()

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

    const addFavorite = city => {
        if (favorites.find(item => item.name === city)) return removeFavorite(city)
        setFavorites(prevFavorites => [...prevFavorites, { id: nanoid(), name: city }])
    }

    const removeFavorite = city => {
        setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.name !== city))
    }

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProvider }