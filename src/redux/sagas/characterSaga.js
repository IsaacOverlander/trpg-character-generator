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
        const characterSkills = yield call(axios.get, `/api/character/skills?class=${characterById.data.class_name}&background=${characterById.data.background_name}`);
        const characterToSet = {
            character: characterById,
            skills: characterSkills, // {classSkills: [], backgroundSkills: []}
        };
        yield put({ type: 'SET_MODS', payload: characterToSet });
    } catch (error) {
        alert('There was an error getting your character!');
        console.log(error);
    }
}

function* setModifiers(action) {
    const modifiers = yield ['-5', '-4', '-4', '-3', '-3', '-2', '-2', '-1', '-1', '+0', '+0', '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5'];
    const strengthMod = yield modifiers[action.payload.character.data.strength - 1];
    const dexterityMod = yield modifiers[action.payload.character.data.dexterity - 1];
    const constitutionMod = yield modifiers[action.payload.character.data.constitution - 1];
    const intelligenceMod = yield modifiers[action.payload.character.data.intelligence - 1];
    const wisdomMod = yield modifiers[action.payload.character.data.wisdom - 1];
    const charismaMod = yield modifiers[action.payload.character.data.charisma - 1];
    const passiveWisdom = yield 10 + Number(wisdomMod);
    const armorClass = yield 10 + Number(dexterityMod);
    const character = yield {
        info: action.payload.character.data,
        skills: action.payload.skills.data,
        mods: {
            strengthModifier: strengthMod,
            dexterityModifier: dexterityMod,
            constitutionModifier: constitutionMod,
            intelligenceModifier: intelligenceMod,
            wisdomModifier: wisdomMod,
            charismaModifier: charismaMod,
            passiveWisdom: passiveWisdom,
            ac: armorClass,
            isChecked: true,
        }
    }
    yield put({ type: 'SET_CHARACTER_BY_ID', payload: character })
};

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

// Function for updating characters
function* updateCharacter(action) {
    try {
        yield call(axios.put, `/api/character/update/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_CHARACTER_BY_ID', payload: action.payload.id })
    } catch (error) {
        alert('There was an error updating your character!');
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
    yield takeLatest('UPDATE_CHARACTER', updateCharacter);
    yield takeLatest('SET_MODS', setModifiers);
}

export default characterSaga;