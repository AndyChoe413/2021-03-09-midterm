// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
const ageToAbilities = age => {
    if (age < 16) return 'You can\'t drive.';
    if (age >= 25) return 'You can do pretty much anything.';
    if (age < 25 && age >= 18) return 'You can vote but not rent a car.';
    else return 'You can drive but not vote.';
}

const oddIndices = array => {
    let oddIndexes = [];
    for (let i = 1; i < array.length; i++) {
        if (i % 2 === 1) {
            oddIndexes.push(array[i])
        }
    }
    return oddIndexes
}

const numOddValues = arr => {

    let count = 0;
    for (const num of arr) {
        if (num % 2 === 1) {
            count++
        }
    }
    return count
}

const averageStringLength = strArr => {
    if (strArr.length === 0) return 0;
    return strArr.join('').length / strArr.length;
}

const firstPunctuationIndex = str => {
    let index = -1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '!' || str[i] === '.' || str[i] === '?') {
            index = i;
            break;
        }
    }
    return index;
}

const getPlace = (scoreList, playerScore) => {
    let position = scoreList.concat(playerScore).sort((a, b) => b - a).indexOf(playerScore);
    const finalPosition = position + 1
    const numString = finalPosition.toString()
    if (numString.endsWith('1')) return `${Number(numString)}st place`;
    if (numString.endsWith('2')) return `${Number(numString)}nd place`;
    if (numString.endsWith('3')) return `${Number(numString)}rd place`;
    if (numString.endsWith('4')) return `${Number(numString)}th place`;
    if (numString.endsWith('5')) return `${Number(numString)}th place`;
    if (numString.endsWith('6')) return `${Number(numString)}th place`;
    if (numString.endsWith('7')) return `${Number(numString)}th place`;
    if (numString.endsWith('8')) return `${Number(numString)}th place`;
    if (numString.endsWith('9')) return `${Number(numString)}th place`;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
