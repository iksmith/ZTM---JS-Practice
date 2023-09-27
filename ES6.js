// let + const


let multiply = (a, b) => a * b;

// const array = [1, 2, 3, 4, 5]; 
// const double = [];
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// });

console.log(double);

// map, filter, reduce

// Map - always needs a return
const array = [2, 4, 8, 16, 32]; 

const mapArray = array.map(num => num * 2);
console.log('map', mapArray);

//Filter - filters out elements outside of expression. logs elements that are in
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);
// Reduce - takes an accumulator; which stores info of what happens in body of a function. MUST return a value unless it's shorthand syntax like above
const reduceArray = array.reduce((accumulator, num) => {
 return accumulator + num;
}, 0); // === 62 which is sum of all num from above array
// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
//    }, 5); 

// If I change 2nd param to 5, that acts as the starting number + accumulation (accumulator) of all nums in array = 67

console.log('reduce', reduceArray)


// Advanced JS/Obj
// Reference Types
// This

// const obj1 = {
//     a: function() {
//         console.log(this);
//     }
// }

let a = 5;
let b = a;

console.log(b++);

let obj1 = {name: 'Kaleb', password: 'Abc123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1);
console.log(obj2);

let c = [1, 2, 3, 4, 5];
let d = c;
d.push(12345)
console.log('d', d)
console.log('c', c)

let obj = { 
    a: 'a', 
    b: 'b', 
    c: { 
        deep: 'try & copy me' }
    };

let clone = Object.assign({}, obj);
let clone2 = {...obj} // Spread operator - can only clone the first layer
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(clone)
console.log(obj)
console.log(clone2)
console.log(superClone)


// Type Coercion - When two different operants like a # and a string is converted to equal value

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
// {a: 5}
const object2 = object1; 
// {a: 5}
const object3 = object2; 
// {a: 5}
const object4 = { a: 5}; 
object1.a = 4;
//4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
        // I can also use:
        // this.name = name;
        // this.type = type;
        // this.color = color;
    }
    sound() {
        console.log(`Mooo! My name is ${this.name}, and I'm ${this.type}, and ${this.color} !`)
    }
}

const cow = new Mamal('Belle', 'Dairy', 'Black with White Spots')

//ES7
// .includes() => what was included in given expression. Case Sensitive
let pets = ['Cat', 'Dog', 'Fish'];
pets.includes('Fish')
// Outputs true

// Exponential Operators
// let square = (x) => x**2 ;

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');
//false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John'));


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

let square100 = (x) => x **100;


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
//infinity

// Research for yourself why you get this result
// Returns infinity when the value is too high


ES8
.padStart();
.padEnd();
'kangaroo'.padStart(5);
'kangaroo'.padEnd(5);
// Works as Text alignment

// The ending comma is now valid and won't output an error in the console: See Below
const fun = (
    a, 
    b, 
    c, 
    d,
    ) => {
    console.log(a);
}

fun(1,2,3,4,)

Object.values
Object.entries

let obj = {
    username: 'Santa',
    username1: 'Mr.Grinch',
    username2: 'RedNose'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

// username Santa
// username1 Mr.Grinch
// username2 RedNose

Object.values(obj).forEach(value => {
    console.log(value)
})

Santa
Mr.Grinch
RedNose

Object.entries(obj).forEach(entry => {
    console.log(entry);
})
0
: 
(2) ['username', 'Santa']
1
: 
(2) ['username1', 'Mr.Grinch']
2
: 
(2) ['username2', 'RedNose']

//to get rid of 'Username'
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})

// Solve the below problems:

// // #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// turtle = turtle.padStart(8, ' ');
// rabbit = rabbit.padStart(8, ' ');

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// '🐢======='
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');
// // this adds 9 space equal signs to the end of the turtle element

// #3) Get the below object to go from:
// let obj = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // to this:
// // 'my name is Rudolf the raindeer'

// Object.entries(obj).map(value => value.join(" ")).join(' ')



ES10 or ES2019
.flat() // Flattens out nested arrays. Also cleans up unused syntax

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, [2, 3], [4, 5]];
console.log(array1.flat()) // [1, 2, 3, 4, 5]
console.log(array2.flat()) // [1, 2, 3, 4, 5]
let array3 = [1, [2, 3], [4, [5]]];
console.log(array3.flat(2)) // [1, 2, 3, 4, 5]
// You can put a high number if you KNOW that it's higher than the rest

flatMap()

const newArray = array2.flatMap(num => num + '!')
newArray
// (3) ['1!', '2,3!', '4,5!']
// 0
// : 
// "1!"
// 1
// : 
// "2,3!"
// 2
// : 
// "4,5!"

// trimStart(), trimEnd() for no spaces before or after
userEmail = '                   eddyTheEagle.@gmail.com'
userEmail2 = 'johnnyBravo@yahoo.com         '

console.log(userEmail.trimStart()); 
// eddyTheEagle.@gmail.com
console.log(userEmail2.trimEnd()); 
// johnnyBravo@yahoo.com

// fromEntries() - Removes arrays and logs the form line by line =>
userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

Object.fromEntries(userProfiles)

// {commanderTom: 23, derekZlander: 40, hansel: 18}


//Try Catch Block - Tries a function, if it doesn't work then you get a response
try {
    bob + 'hi'
} catch {
    console.log('You messed up!')
}


// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
let newArray = array.flat(6);
console.log(newArray);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let newGreeting = greeting.flat(line => line + greeting.join(' '));
console.log(newGreeting);



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let untrapped = trapped.flat(50);
console.log(untrapped)
[3]



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
let newEmail = userEmail3.trimEnd() && userEmail3.trimStart()
console.log(newEmail)
//cannotfillemailformcorrectly@gmail.com   


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
let newUsers = users.flat()
console.log(newUsers)


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
