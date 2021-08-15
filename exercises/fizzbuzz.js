//write a program that prints all the numbers from 1 to 100.
//for multiples of 3, instead of the number, print fizz
//for multiples of 5 print 'buzz'
//for multiples of both print 'fizzbuzz'

function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        //module operator
        if(i % 3 === 0 && i % 5 === 0) { //also can make if(i % 15 ===0)
            console.log('fizzbuzz');

        }
        else if( i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(i);
        }

    }

}

//call
const output = fizzBuzz();

console.log(output);