import d20 from 'd20/d20';

let proficientSkills = [];

function classSkillSelector(classId, classSkills) {
    switch (classId) {
        case '1':
            getRandomSkills(classSkills, 2);
            break;
        case '2':
            getRandomSkills(classSkills, 3);
            break;
        case '3':
            getRandomSkills(classSkills, 2);
            break;
        case '4':
            getRandomSkills(classSkills, 2);
            break;
        case '5':
            getRandomSkills(classSkills, 2);
            break;
        case '6':
            getRandomSkills(classSkills, 2);
            break;
        case '7':
            getRandomSkills(classSkills, 2);
            break;
        case '8':
            getRandomSkills(classSkills, 3);
            break;
        case '9':
            getRandomSkills(classSkills, 4);
            break;
        case '10':
            getRandomSkills(classSkills, 2);
            break;
        case '11':
            getRandomSkills(classSkills, 2);
            break;
        case '12':
            getRandomSkills(classSkills, 2);
            break;
        default:
            console.log('No class');
    }
    return proficientSkills;
}

function getRandomSkills(skills, limit) {
    const skillList = [];
    for (let i = 0; i < limit; i++) {
        let roll = d20.roll(`1d${skills.length - 1}`);
        skillList.push(skills[roll].skill);
        skills.splice(roll, 1);
    }
    return proficientSkills = skillList;
}

export default classSkillSelector;