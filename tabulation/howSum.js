// 1- draw the table
// 2- set complexity 
//m = targetSum   0(m°n) time
//n = numbers.length 0(m°) space

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum +1).fill(null);
    table[0] = [];

    for ( let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table [i + num] = [ ...table[i], num];
            }
        }
    }
    return table[targetSum];

};

console.log(howSum(7, [5, 3, 4])) //[4, 3]