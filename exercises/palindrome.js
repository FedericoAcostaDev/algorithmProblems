//validate a palindrome
//return true if palindrome and false if not

function isPalindrome(str) {
    const reverseString = str
    .split('')
    .reverse()
    .join('');

    return reverseString === str;
}

//call function

const output = isPalindrome('racecar');
console.log(output);