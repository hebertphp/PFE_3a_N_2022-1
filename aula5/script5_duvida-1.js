var  nota,msg;

nota=prompt("Digite sua nota");
nota=parseFloat(nota);

//msg=(nota>=6)?"Aprovado":"Reprovado";

if(nota>=6){
    msg="Aprovado";
}
else{
    msg="Reprovado";
}

document.write(nota+" situação: "+msg);