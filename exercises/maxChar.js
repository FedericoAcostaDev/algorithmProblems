//return the character that is most common in a sting

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('')
    .forEach(function(char){
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for(let char in charMap) {
        //debugger;
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;

        }
    }
    return maxChar;
}

//call
const output = maxCharacter('javascripttttt');

console.log(output);
