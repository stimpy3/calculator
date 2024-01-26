let screen = document.querySelector("#screen");
let clear = document.querySelector("#clear");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");

let screenVar="";
one.addEventListener("click", () => {  
    screenVar+="1";
    screen.innerHTML = screenVar;
});

two.addEventListener("click", () => {  
    screenVar+="2";
    screen.innerHTML = screenVar;
});

three.addEventListener("click", () => {  
    screenVar+="3";
    screen.innerHTML = screenVar;
});

four.addEventListener("click", () => {  
    screenVar+="4";
    screen.innerHTML = screenVar;
});

five.addEventListener("click", () => {  
    screenVar+="5";
    screen.innerHTML = screenVar;
});

six.addEventListener("click", () => {  
    screenVar+="6";
    screen.innerHTML = screenVar;
});

seven.addEventListener("click", () => {  
    screenVar+="7";
    screen.innerHTML = screenVar;
});

eight.addEventListener("click", () => {  
    screenVar+="8";
    screen.innerHTML = screenVar;
});

nine.addEventListener("click", () => {  
    screenVar+="9";
    screen.innerHTML = screenVar;
});

clear.addEventListener("click", () => {
    screen.innerHTML = "";
    screenVar="";
});
