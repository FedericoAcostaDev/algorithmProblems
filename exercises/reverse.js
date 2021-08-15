//challenge 1: reverse a string
//return a string in reverse
//ex ('hello') === 'olleh'

function reverseString(str) {
    //split the string into an array & reverse & turning back into string
    return str
    .split ('')
    .reverse()
    .join('');
}

//call function 


const output = reverseString('hello');

console.log(output);