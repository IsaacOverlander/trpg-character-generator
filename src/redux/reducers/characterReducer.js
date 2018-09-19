import { combineReducers } from 'redux';

const characters = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return action.payload;
        default:
            return state
    }
}

const classes = (state = [], action) => {
    if(action.type === 'SET_CLASSES') {
        return action.payload;
    }
    return state;
}

const races = (state = [], action) => {
    if(action.type === 'SET_RACES') {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    characters,
    classes, 
    races,
});