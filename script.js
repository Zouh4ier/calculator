function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function substract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

let first ='';
let second='';
let op="";


function operate(num1,num2,operator){
    let result=0;
    switch(operator){
        case "+": result=add(num1,num2);
        break;

        case "-": result=substract(num1,num2);
        break;

        case ':': result=divide(num1,num2);
        break;

        case "x": result=multiply(num1,num2);
        break;
    }

    return result;
}


const output= document.querySelector('#output');
const number=document.querySelector('.numbers');
const operator=document.querySelector('.operators');
const equal=document.querySelector('.equal');
const clear=document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

number.addEventListener('click',(event)=>{  
    let target=event.target;
    inputHandler(target.innerText);
    output.textContent+=target.innerText;
});

operator.addEventListener('click', (event)=>{
    let target=event.target;
    operatorHandler(target.innerText);
    output.textContent+=target.innerText;
});


function inputHandler(number){
    if(op=='') first=first+number;
    else{
        second=second+number;
    }
}

// Handles expressions with more than one operator
function operatorHandler(oper){
    if (op==''){
        op=oper;
    }else{
        first=+first;
        second=+second;
        first=operate(first,second,op);
        second='';
        op=oper;
    }
}



//This function helps to avoid having more than one decimal in a number
function decimalCheck(){
    if(first.includes('.') && op==''){
        return false;
    }else if(second.includes('.') && op!='' ) {
        return false;
    }else {
        return true;
    }
}

//determines the place of decimal point when the decimal button is clicked
function decimalHnadler(decimal){
    if(op=='' && decimalCheck()){
        first=first+decimal;
        output.textContent+=decimal;
    } else if(op!='' && decimalCheck()){
        second=second+decimal;
        output.textContent+=decimal;
    }
}

equal.addEventListener('click',()=>{
    if (op=='' || first=='' || second==''){
        alert("invalid input");
        output.textContent='';
        op='';
        first='';
        second='';
    }else{
        first=+first;
        second=+second;
        let res=operate(first,second,op);
        output.textContent= Math.round(res*10)/10;
    }
 })


clear.addEventListener('click',()=>{
    first='';
    second='';
    op='';
    output.textContent='';
})



decimal.addEventListener('click',(event)=>{
    let target=event.target;
    decimalHnadler(target.innerText);
})