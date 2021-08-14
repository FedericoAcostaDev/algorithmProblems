//bestSum(targetSum, numbers)=>shortest combination
//bestSum(7, [5, 3, 4, 7])=> [7]

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum (remainder, numbers, memo);
        if ( remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            // if the combination is shorter than the current 'shortest', update it
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

//m = target sum
//n = numbers.lenght

//brute force
//time: 0(n°m * m)
//space:0(m°2)

//memoized
//time: 0(  )

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(100, [1, 2, 5, 25])); //[25,25,25,25]