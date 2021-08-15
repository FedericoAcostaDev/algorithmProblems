//return an interger in reverse

function reverseInt(int){
    const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(revString) * Math.sign(int);
}
//math to use whit negatives as well
//call function
const output = reverseInt(-12345);
console.log(output);