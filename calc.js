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
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#division");
let equal = document.querySelector("#equal");

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

plus.addEventListener("click", () => {  
    screenVar+="+";
    screen.innerHTML = screenVar;
});

minus.addEventListener("click", () => {  
    screenVar+="-";
    screen.innerHTML = screenVar;
});

multiply.addEventListener("click", () => {  
    screenVar+="x";
    screen.innerHTML = screenVar;
});

division.addEventListener("click", () => {  
    screenVar+="/";
    screen.innerHTML = screenVar;
});


equal.addEventListener("click", () => {
    let number= Number(screenVar);
    console.log(number); 
   // if(number==NaN) wrong way to write, it'll not work
   //use predefined function isNaN
    if(isNaN(number)){
    screen.innerHTML ="invalid";}
});

clear.addEventListener("click", () => {
    screen.innerHTML = "";
    screenVar="";
    number=null;
});
