function calc(n1,n2,op){
    if(op=="+"){
        return n1+n2;
    }
    else if(op=="-"){
        return n1-n2;
    }
    else if(op=="*"){
        return n1*n2;
    }
    else if(op=="/"){
        return n1/n2;
    }
    else if(op=="%"){
        return n1%n2;
    }
    else{
        return "Operação inválida";
    }
}
var num1=parseFloat(prompt("Digite um número"));//2.3
var num2=parseFloat(prompt("Digite outro número"));//7.7
var operador=prompt("Digite o operador")
document.write("num1: "+num1+", num2: "+num2+" calc: "+calc(num1,num2,operador));