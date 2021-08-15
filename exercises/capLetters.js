//return a string whit the first letter of every word capitalized

function capLetters(str) {
    const strArray = str
    .toLowerCase() //make all lowercase
    .split(' '); //with space bc we want each word not each character

    for(let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substring(0, 1)
        .toUpperCase()
        + strArray[i].substring(1);
    }

    return strArray.join(' ');
}
const output = capLetters('i love javascript');

console.log(output);