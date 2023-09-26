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

const obj1 = {
    a: function() {
        console.log(this);
    }
}