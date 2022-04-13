var num,calc;
num=prompt("Digite um numero inteiro");//"70"
num=parseInt(num);//


calc=num%2;

if(calc==0){
    document.write(num+" - PAR");
}
else{
    document.write(num+" - ÍMPAR");
}

//document.write(num+" ----- "+calc);
/*
Elaborar um código Javascript para dado um número inteiro, 
verificar se
o número é PAR ou ÍMPAR. A saída deverá mostrar o número e mostrar
PAR ou ÍMPAR, como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/