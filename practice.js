// Data Strucures: Arrays
// A nice way to list items in order. 
// Can hold strings, numbers, booleans, functions, and a mix of them all. Mixed arrays cause performance issues, so it's not suggested.
// you can also make an array within an array
// let race = ["Saiyan", "Pirate", "Sorcerer", "Shinobi"];
// console.log(race[3]);

// let types = ["Dragon", "Fire", "Steel", "Bug", "Water"];

// types.concat(["Fairy", "Ghost"]);

// let array = ["Banana", "Apples", "Oranges", "Blueberries"]; 


// console.log(array.shift());
// console.log(array.sort());
// console.log(array.push("Kiwi"));
// console.log(array.splice(0, 1));
// console.log(array.reverse());

// let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// console.log(array2[1][1][0]);

// Data Structures: Objects
// Objects are JS types and Data Structures

// let user = {
//     firstName: "John",
//     lastName: "Smith",
//     age: 34,
//     creativeType: "Gamer"
// };

// Facebook App
let userLogin = {
    username: "iKsmith",
    password: "Abc123"
};

let database = [
    {
        username: "iKsmith",
        password: "Abc123"
    },
    {
        username: "MajgenShep",
        password: "yoyo"
    },
    {
        username: "Keezy2Breezy",
        password: "KEYS"
    }
];

const newsFeed = [
    {
        username: "iKsmith",
        timeline: "Hello World"
    },
    {
        username: "MajgenShep",
        timeline: "You On?"
    },
    {
        username: "Keezy2Breezy",
        timeline: "Oh, Twoo KaAyYy!?!?"
    }
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (let i=0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
                return true;
            } 
             
        }
        return false;
    }


function signIn(username, password) {
    console.log(isUserValid(username, password));

    if (isUserValid(username, password)) {
        console.log(newsFeed);
        } else {
            alert("Sorry, wrong username or password!");
        }
     }

signIn(userNamePrompt, passwordPrompt);