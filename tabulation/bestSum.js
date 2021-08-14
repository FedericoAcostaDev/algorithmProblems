

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for ( let i = 00; i <= targetSum; i++) {
        if (table [i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num ];
                //if this current combination is shorter that what is already stored
                if(!table[i + num] || table[i + num].length > combination.length) {
                table[i + num] = combination;
            }}
        }
    }
    return table [targetSum];

};


console.log(bestSum(8, [2, 3, 5])) // [3, 5]