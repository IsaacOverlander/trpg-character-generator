import { put, call, takeLatest } from 'redux-saga/effects';
import classSkillSelector from '../../components/AddCharacter/classSkillSelector';
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
        yield put({ type: 'SET_MODS', payload: characterById});
    } catch (error) {
        alert('There was an error getting your character!');
        console.log(error);
    }
}
// Function to set a specific characters modifiers
function* setModifiers(action) {
    const modifiers = yield ['-5', '-4', '-4', '-3', '-3', '-2', '-2', '-1', '-1', '+0', '+0', '+1', '+1', '+2', '+2', '+3', '+3', '+4', '+4', '+5'];
    const strengthMod = yield modifiers[action.payload.data.strength - 1];
    const dexterityMod = yield modifiers[action.payload.data.dexterity - 1];
    const constitutionMod = yield modifiers[action.payload.data.constitution - 1];
    const intelligenceMod = yield modifiers[action.payload.data.intelligence - 1];
    const wisdomMod = yield modifiers[action.payload.data.wisdom - 1];
    const charismaMod = yield modifiers[action.payload.data.charisma - 1];
    const passiveWisdom = yield 10 + Number(wisdomMod);
    const armorClass = yield 10 + Number(dexterityMod);
    const character = yield {
        info: action.payload.data,
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
// Function to GET skills to determine characters skill proficiencies
function* getClassSkills(action) {
    try {
        console.log('SETTING SKILLS TO FALSE');
        //Sets all skills to false to allow accurate proficiency calculations
        yield call (axios.put, '/api/character/update/false')
        const skills = yield call(axios.get, `/api/character/skills/class?class=${action.payload}`);
        const characterSkills = {id: action.payload, skills: skills.data}
        yield put({type: 'SET_PROFICIENCIES', payload: characterSkills});
    }
    catch (error) {
        alert('There was an error!');
        console.log(error);
    }
}
// Function to set proficient skills
function* setProficienies(action) {
    const skillList = yield classSkillSelector(action.payload.id, action.payload.skills);
    yield call(axios.put, '/api/character/update/true', skillList);
    const allSkills = yield call(axios.get, '/api/character/skills');
    console.log(allSkills);
    yield put({type: 'SET_SKILLS', payload: allSkills.data});
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
// Funciton to GET equipment
function* getEquipment(action) {
    const equipment = yield call(axios.get,`/api/character/equipment/${action.payload}`);
    yield put({type: 'SET_EQUIPMENT', payload: equipment.data});
}
// Function to reset equipment
function* resetEquipment() {
    const reset = {};
    yield put({type: 'RESET', payload: reset});
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
    yield takeLatest('GET_CLASS_SKILLS', getClassSkills);
    yield takeLatest('SET_PROFICIENCIES', setProficienies);
    yield takeLatest('GET_EQUIPMENT', getEquipment);
    yield takeLatest('RESET_EQUIPMENT', resetEquipment);
}

export default characterSaga;