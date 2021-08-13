//the traveler only can move down or right inside an unknown grid
//as well as fibonnaci algorithm, the larger numbers are slower to process 
//so we need to memorize the repeting patterns
//the diference here is we have 2 numbers (n,m). in the pattern we need to make (n,m)=(m,n)

const gridTraveler = (m,n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    //are the arguments in the memo?
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;


    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18)); //2333606220
