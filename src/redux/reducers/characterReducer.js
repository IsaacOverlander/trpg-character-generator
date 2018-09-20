import { combineReducers } from 'redux';


// Sets all characters by user
const characters = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.payload;
        default:
            return state
    }
}

// Sets character by character_id
const characterById = (state = {}, action) => {
    if (action.type === 'SET_CHARACTER_BY_ID'){
            return action.payload.data;
    }
    return state;
}

// Sets classes for dropdown
const classes = (state = [], action) => {
    if(action.type === 'SET_CLASSES') {
        return action.payload;
    }
    return state;
}

// Sets races for dropdown
const races = (state = [], action) => {
    if(action.type === 'SET_RACES') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    characterById,
    characters,
    classes, 
    races,
});