//Arrays
//always can be used
//order matters, accepts duplicates

const names = ['max', 'manu', 'julie', 'max'];
console.log(names[1]);
console.log(names.length); 

for ( const el of names) {
    console.log(el);
}

names.push('julie'); 
console.log(names.length)

const julieIndex = names.findIndex(el => el === 'julie'); //return boolean

names.splice(2, 1); //delete item
console.log(names);

//Sets

//when you need unique values
//simplifies finding, deletion compared to arrays
//-no duplicates
// no order nor position

const ids = new Set();

ids.add('abc');
ids.add(1);
ids.add('bbd');

for ( const el if ids ) {
    console.log(el);
}
//we use has to return a boolean -it has 'abc'?
console.log(ids.has('abc'));

ids.delete('bbd');

console.log(ids);

//Objects

//can work like data store
//can have functionality inside
//can store data
//acces via key
//unordered value
//only for-in

const person = { 
    firstName: 'Max', 
age: 31, 
hobbies: ['sports', 'cooking'] 
greet(){ //functionality
    console.log('hi,i am' + this.firstName); 
};

person.lastName = 'Scharz'; //add

delete person.age; //delete

//Maps

//are just data storage
//ordered data by key
//iterable 
//keys can be anything
//optimized for data access

const resultData = new Map();

resultData.Set('average', 1.20); //(key, value)
resultData.Set('lasResult', null);

const country = {name:'germay', population: 8800};

resultData.Set(country, 0.89); //add

for (cosnt el of resultData);

console.log(resultData.greet('average')); //return value by key

//WakSet & WeakMap



//types of data estructures

//linked list

class linkedList {
    constructor() {
        this.head = null; //firts element of the list
        this.tail = null; //last element
    }

    append(value) {
        const newNode = {value: value, next: null}; //needs to be an object
        if (this.tail) {
        this.tail.next = newNode //the new node is stored in the next
        }
        this.tail = newNode; //store a new value in tail
        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) { //add something to the begining of something else
        const newNode = {value: value, next: this.head};

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    //in order to see the result
    toArray() {
        const elements = [];
//as long as we have an object in curlNode we continue looping
        let curNode = this.head;
        while(curNode) {
            elements.push(curNode); //add this elements to the array
            curNode = curNode.next;
        }
        return elements;
    }
}

const linkedList1 = new linkedList();
linkedList.append(1); //to call the data

console.log(linkedList1.toArray()); //get an array with all the node with the next




