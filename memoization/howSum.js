// howSum(targetSum, numbers)=>[numbers who are useful to sum] || null

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if ( remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num];
            return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
};

//m=targetSum
//n=numbers.lenght
//brute force
//time: 0(n°m *m) °=square
//space: 0(m)

//memoized version
//time: 0(n*m°)
//space: 0(m°)


console.log(howSum(7, [5, 3, 4, 7])); //[3, 4]
console.log(howSum(300, [7, 14])); //null