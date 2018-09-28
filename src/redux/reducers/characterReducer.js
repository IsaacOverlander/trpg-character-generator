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
        return action.payload;
    }
    if (action.type === 'RESET') {
        return action.payload;
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
// Sets skills for determining proficiencies
const skills = (state = [], action) => {
    if (action.type === 'SET_SKILLS') {
        return action.payload;
    }
    return state;
}
// Sets equipment by class_id
const equipment = (state = {}, action) => {
    if (action.type === 'SET_EQUIPMENT'){
        console.log(action.payload);
        return action.payload;
    }
    else if (action.type === 'RESET') {
    console.log('In reset:', action.payload);
        return action.payload;
    }
    return state;
}

export default combineReducers({
    characterById,
    characters,
    equipment,
    classes,
    skills,
    races,
});