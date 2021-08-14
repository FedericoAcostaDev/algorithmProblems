//canSum(targetSum,[numbers]) => boleans | we can sum the numbers all the times posibles
//its the same tree but with booleans
const canSum = (targetSum, numbers, memo= {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true; //best case escenario
    if(targetSum < 0) return false;

    for (let num of numbers) { //to search every num of the array
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true; //to store the return like a memo
            return true;
        }//we dont use else because the function needs to check all the posibilities before return false
    }
    memo[targetSum] = false;
   return false;
};

console.log(canSum(7,[2, 3])); //true
console.log(canSum(7,[5, 3, 4, 7])); //true
console.log(canSum(7,[2, 4])); //false
console.log(canSum(7,[2, 3, 5])); //true
console.log(canSum(300,[7, 14])); //true |numbers are going to sum until reach 300
