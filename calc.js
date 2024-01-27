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
let opIndex,operator;
let opArr=[],opInArr=[];
let strNumArr=[];
let i=0,j,result=0;
let numArray


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
        let ele_num="";
        //operator index array maker
        for(let char of StrScreenVar){
            ++i;
        if(char==='+'||char==='-'||char==='x'||char==='/'){
            opInArr.push(i-1);
        }
        }
        //......................................
        for(j=0;j<StrScreenVar.length;j++){
            if(StrScreenVar.charAt(j)!=='+' && StrScreenVar.charAt(j)!=='-' && StrScreenVar.charAt(j)!=='x' && StrScreenVar.charAt(j)!=='/'){
                ele_num=ele_num+StrScreenVar.charAt(j);   
            }
            else{
                strNumArr.push(ele_num);
                ele_num="";
                opArr.push(StrScreenVar.charAt(j));
            }
        }
        strNumArr.push(ele_num);

    console.log(strNumArr);
    numArray=strNumArr.map(Number);
    console.log(StrScreenVar);
    console.log(opInArr);
    console.log(opArr);
    
    }

    if(StrScreenVar.charAt(0)=='x' || StrScreenVar.charAt(0)=='/' || StrScreenVar.charAt(0)=='+')
    {
        screen.innerHTML="NaN";
        StrScreenVar="";
    }
    
    else{
        let result = numArray[0];

        for (let k = 0; k < opArr.length; k++) {
            if (opArr[k] === '+') {
                result += numArray[k + 1];
            } else if (opArr[k] === '-') {
                result -= numArray[k + 1];
            } else if (opArr[k] === 'x') {
                result *= numArray[k + 1];
            } else if (opArr[k] === '/') {
                result /= numArray[k + 1];
            }
        }
        
        screen.innerHTML = result;
        
   }

    });
     
clear.addEventListener("click", () => {
    screen.innerHTML = "";
    StrScreenVar="";
    number=0;
    opArr=[];
    opInArr=[];
    strNumArr=[];
    ele_num="";
    i=0;
    result=0;
});
     
