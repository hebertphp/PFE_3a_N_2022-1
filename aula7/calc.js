function mostra(){
    const id_saida=document.querySelector("#saida");
    const id_n1=document.querySelector("#n1");
    const id_n2=document.querySelector("#n2");
    const id_op=document.querySelector("#op");
    
    id_saida.innerHTML=id_n1.value+"<br>"+id_op.value+"<br>"+id_n2.value+"<br>------<br>";
    id_saida.innerHTML+=calc(parseFloat(id_n1.value),parseFloat(id_n2.value),id_op.value);
    //id_saida.innerHTML+=calc(parseInt(id_n1),parseInt(id_n2),id_op);
    //id_saida.innerHTML+=calc(id_n1.value,id_n2.value,id_op.value);
   // parseInt("7.8")//7
   // parseFloat("7.8")//7.8
    //calc(3,5,"*")//15
}

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