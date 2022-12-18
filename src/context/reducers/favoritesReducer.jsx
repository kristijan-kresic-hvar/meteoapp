import { nanoid } from 'nanoid'

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if (state.find(item => item.name === action.city)) return state.filter(favorite => favorite.name !== action.city)
            return [...state, { id: nanoid(), name: action.city }]
        case 'REMOVE_FAVORITE':
            return state.filter(favorite => favorite.name !== action.city)
        case 'REMOVE_ALL_FAVORITES':
            return []
        default:
            return state
    }
}

export default favoritesReducer