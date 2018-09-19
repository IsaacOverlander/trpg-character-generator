import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCharacters() {
    try {
        const characters = yield call(axios.get, '/api/character');
        yield put({type: 'SET_CHARACTERS', payload: characters.data})

    } catch (error) {
        alert('There was an error getting your characters!');
        console.log(error);
    }
}

function* getClasses() {
    try {
        const classes = yield call(axios.get, '/api/character/class');
        yield put({type: 'SET_CLASSES', payload: classes.data});
    } catch (error) {
        alert('There was an error getting the classes!');
        console.log(error);
    }
}

function* getRaces() {
    try {
        const classes = yield call(axios.get, '/api/character/race');
        yield put({type: 'SET_RACES', payload: classes.data});
    } catch (error) {
        alert('There was an error getting the races!');
        console.log(error);
    }
}

function* characterSaga() {
    yield takeLatest('GET_CHARACTERS', getCharacters);
    yield takeLatest('GET_CLASSES', getClasses);
    yield takeLatest('GET_RACES', getRaces);
}

export default characterSaga;