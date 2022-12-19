import { nanoid } from 'nanoid'

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if (state.find(item => item.city === action.city.city)) return state.filter(favorite => favorite.city !== action.city.city)
            return [...state, { id: nanoid(), city: action.city.city, lat: action.city.lat, lng: action.city.lng }]
        case 'REMOVE_FAVORITE':
            return state.filter(favorite => favorite.city !== action.city.city)
        case 'REMOVE_ALL_FAVORITES':
            return []
        default:
            return state
    }
}

export default favoritesReducer