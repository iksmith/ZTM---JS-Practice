// DOM Selectors
// --------------
// getElementsByTagName
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children

// ##It is important to CACHE selectors in variables

let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}
function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keydown", addListAfterKeypress)

// Create Done Toggle



