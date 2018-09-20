import d20 from 'd20/d20';

// Function for randomizing charater data
const createCharacter = () => {
    const classToCreate = d20.roll('1d12');
    const raceToCreate = d20.roll('1d9');
    const backgroundToCreate = d20.roll('1d18');
    const alignmentToCreate = d20.roll('1d8');
    const personalityToCreate = d20.roll('1d104');
    const idealToCreate = d20.roll('1d11');
    const bondToCreate = d20.roll('1d78');
    const flawToCreate = d20.roll('1d78');
    const nameToCreate = 'John Doe';
    const strengthToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));
    const dexterityToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));
    const constitutionToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));
    const intelligenceToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));
    const wisdomToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));
    const charismaToCreate = (d20.roll('2d6')) + (d20.roll('1d8'));

    //returns an object that is used to set state in AddCharacter
    return {
        class_id: classToCreate,
        background_id: backgroundToCreate,
        race_id: raceToCreate,
        alignment_id: alignmentToCreate,
        personality_id: personalityToCreate,
        ideal_id: idealToCreate,
        bond_id: bondToCreate,
        flaw_id: flawToCreate,
        name: nameToCreate,
        strength: strengthToCreate,
        dexterity: dexterityToCreate,
        constitution: constitutionToCreate,
        intelligence: intelligenceToCreate,
        wisdom: wisdomToCreate,
        charisma: charismaToCreate,
        inspiration: 0,
        proficiency: 2,
    }
}


export default createCharacter;