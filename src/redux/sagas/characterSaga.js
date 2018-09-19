import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCharacters() {
    try {
        const characters = yield call(axios.get, '/api/character');
        yield put({ type: 'SET_CHARACTERS', payload: characters.data })

    } catch (error) {
        alert('There was an error getting your characters!');
        console.log(error);
    }
}

function* getCharacterById(action) {
    try {
        const characterById = yield call(axios.get, `/api/character/${action.payload}`);
        yield put({type: 'SET_CHARACTER_BY_ID', payload: characterById});
    } catch (error) {
        alert('There was an error getting your character!');
        console.log(error);
    }
}

function* deleteCharacter(action) {
    try {
        yield call(axios.delete, `/api/character/${action.payload}`);
        yield put({ type: 'GET_CHARACTERS' });
    } catch (error) {
        alert('There was an error deleting your character!');
        console.log(error);
    }
}

function* getClasses() {
    try {
        const classes = yield call(axios.get, '/api/character/class');
        yield put({ type: 'SET_CLASSES', payload: classes.data });
    } catch (error) {
        alert('There was an error getting the classes!');
        console.log(error);
    }
}

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
}

export default characterSaga;