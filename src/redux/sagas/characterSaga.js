import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Function to send a GET request for all characters by user_id
function* getCharacters() {
    try {
        const characters = yield call(axios.get, '/api/character');
        yield put({ type: 'SET_CHARACTERS', payload: characters.data })

    } catch (error) {
        alert('There was an error getting your characters!');
        console.log(error);
    }
}

// Function to send a Get request for a specific character
function* getCharacterById(action) {
    try {
        const characterById = yield call(axios.get, `/api/character/${action.payload}`);
        yield put({type: 'SET_CHARACTER_BY_ID', payload: characterById});
    } catch (error) {
        alert('There was an error getting your character!');
        console.log(error);
    }
}

// Function to send a POST request to add a character to the database
function* generateCharacter(action) {
    try {
        yield call(axios.post, 'api/character/create', action.payload);;
    } catch (error) {
        alert('There was an error creating your character!');
        console.log(error);
    }
}

// Function to send a DELETE request to remove specific characters from the database
function* deleteCharacter(action) {
    try {
        yield call(axios.delete, `/api/character/${action.payload}`);
        yield put({ type: 'GET_CHARACTERS' });
    } catch (error) {
        alert('There was an error deleting your character!');
        console.log(error);
    }
}

// Function to send a GET request to populate dropdowns
function* getClasses() {
    try {
        const classes = yield call(axios.get, '/api/character/class');
        yield put({ type: 'SET_CLASSES', payload: classes.data });
    } catch (error) {
        alert('There was an error getting the classes!');
        console.log(error);
    }
}

// Function to send a GET request to populate dropdowns
function* getRaces() {
    try {
        const classes = yield call(axios.get, '/api/character/race');
        yield put({ type: 'SET_RACES', payload: classes.data });
    } catch (error) {
        alert('There was an error getting the races!');
        console.log(error);
    }
}

function* characterSaga() {
    yield takeLatest('GET_CHARACTERS', getCharacters);
    yield takeLatest('DELETE_CHARACTER', deleteCharacter);
    yield takeLatest('GET_CLASSES', getClasses);
    yield takeLatest('GET_RACES', getRaces);
    yield takeLatest('GET_CHARACTER_BY_ID', getCharacterById);
    yield takeLatest('CREATE_CHARACTER', generateCharacter);
}

export default characterSaga;