let starWars = [
    "Anakin Skywalker",
    "Obi Wan Kenobi",
    "Ashoka",
    "Yoda",
    "Mace Windu"
];

for (let i=0; i < starWars.length; i++) {
    starWars[i] = "I am " + String(starWars[i] + " !");
}

let counterOne = 10;
while (counterOne > 10 ) {
    console.log("While" , counterOne);
    counterOne--;
}

let counterTwo = 10
do {
    console.log("Do While", counterTwo);
    counterTwo--;
} while (counterTwo > 10)