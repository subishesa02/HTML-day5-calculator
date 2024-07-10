let firstnumber="";
let secondnumber="";
let operator="";
//function body for append
//def function_name(argm)
function append(number){
    if(operator===""){
        firstnumber+=number;
        document.getElementById('result').value=firstnumber;
    }else{
        secondnumber+=number;
        document.getElementById('result').value=secondnumber;
    }
}
//function for operation
function operation(op){
    operator=op;
}
//function for equal symbol
function calculate(){
    let result="";
    switch(operator){
        case '+':
            result=parseInt(firstnumber)+parseInt(secondnumber);
            break
        case '-':
            result=parseInt(firstnumber)-parseInt(secondnumber);
            break
        case '*':
            result=parseInt(firstnumber)*parseInt(secondnumber);
            break
        case '/':
            result=parseInt(firstnumber)/parseInt(secondnumber);
            break
    }
    document.getElementById('result').value=result;
}
function clearresult(){
    firstnumber="";
    secondnumber="";
    operator="";
    document.getElementById('result').value="";
}
