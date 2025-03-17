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
        output.textContent= res;
    }
 })


clear.addEventListener('click',()=>{
    first='';
    second='';
    op='';
    output.textContent='';
})