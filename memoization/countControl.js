

const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];0
    if (target === '') return 1;


    let totalCount = 0;
    

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }

    }
    memo[target] = totalCount;
    return totalCount;
};


console.log(countConstruct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd'])); //1
