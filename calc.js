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

let StrScreenVar="";
let opIndex,num1,num2,operator;
one.addEventListener("click", () => { 
    StrScreenVar+="1";
    screen.innerHTML = StrScreenVar;

});

two.addEventListener("click", () => {  
    StrScreenVar+="2";
    screen.innerHTML = StrScreenVar;
});

three.addEventListener("click", () => {  
    StrScreenVar+="3";
    screen.innerHTML = StrScreenVar;
});

four.addEventListener("click", () => {  
    StrScreenVar+="4";
    screen.innerHTML = StrScreenVar;
});

five.addEventListener("click", () => {  
    StrScreenVar+="5";
    screen.innerHTML = StrScreenVar;
});

six.addEventListener("click", () => {  
    StrScreenVar+="6";
    screen.innerHTML = StrScreenVar;
});

seven.addEventListener("click", () => {  
    StrScreenVar+="7";
    screen.innerHTML = StrScreenVar;
});

eight.addEventListener("click", () => {  
    StrScreenVar+="8";
    screen.innerHTML = StrScreenVar;
});

nine.addEventListener("click", () => {  
    StrScreenVar+="9";
    screen.innerHTML = StrScreenVar;
});

plus.addEventListener("click", () => {  
    StrScreenVar+="+";
    screen.innerHTML = StrScreenVar;
});

minus.addEventListener("click", () => {  
    StrScreenVar+="-";
    screen.innerHTML = StrScreenVar;
});

multiply.addEventListener("click", () => {  
    StrScreenVar+="x";
    screen.innerHTML = StrScreenVar;
});

division.addEventListener("click", () => {  
    StrScreenVar+="/";
    screen.innerHTML = StrScreenVar;
});


equal.addEventListener("click", () => {
    let number= Number(StrScreenVar);
    console.log(number); 
   // if(number==NaN) wrong way to write, it'll not work
   //use predefined function isNaN
    if(isNaN(number)){
        // Check if the screenVar contains any of the operators
        opIndex=StrScreenVar.indexOf('+');
        
        // Check for other operators if the first one is not found
        if (opIndex===-1) {
            opIndex=StrScreenVar.indexOf('-');
        }
        if (opIndex===-1) {
            opIndex=StrScreenVar.indexOf('x');
        }
        if (opIndex===-1) {
            opIndex=StrScreenVar.indexOf('/');
        }
        num1=Number(StrScreenVar.slice(0,opIndex));
        num2=Number(StrScreenVar.slice(opIndex+1,StrScreenVar.length));
        operator=StrScreenVar.charAt(opIndex);
        if(operator=='+'){
            number=num1+num2;
        }
        else if(operator=='-'){
            number=num1-num2;
        }
        else if(operator=='x'){
            number=num1*num2;
        }
        else{
            number=num1/num2;
        }
    
    }
    if(StrScreenVar.charAt(0)=='x' || StrScreenVar.charAt(0)=='/' || StrScreenVar.charAt(0)=='+')
    {
        screen.innerHTML="NaN";
        StrScreenVar="";
    }
    else{
     screen.innerHTML = number;   }
    });

clear.addEventListener("click", () => {
    screen.innerHTML = "";
    StrScreenVar="";
    number=null;
});

     
