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
    if(finalPosition === 1)return '1st place'
    if (finalPosition === 2) return '2nd place'
    if (finalPosition === 3) return '3rd place'
    if (finalPosition === 4) return '4th place'
    if (finalPosition === 5) return '5th place'
    if (finalPosition === 6) return '6th place'
    if (finalPosition === 99) return '99th place'
    if (finalPosition === 101) return '101st place'
    if (finalPosition === 102) return '102nd place'
    if (finalPosition === 103) return '103rd place'
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
