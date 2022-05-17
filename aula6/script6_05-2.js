//             0           1          2           3         4             5          6   
var cidade=["São Paulo","Campinas","Sorocaba","Guarulhos","Pedreira","Jaguariuna","São Pedro"];
//quantidade de valores // 7  //cidade.length
//última posição       //  6  //cidade.length-1

document.querySelector("h1").innerHTML=cidade[2]+" - "+cidade[3];

document.querySelector("#dv1").innerHTML="A variável cidade tem "+cidade.length +" valores";

document.querySelector("h2").innerHTML+=cidade[cidade.length-1];
/*
Mudar o conteúdo da tag h1, por Sorocaba - Guarulhos

Mudar o conteúdo da tag div id="dv1" para mostrar a mensagem:
"A variável cidade tem 6 valores", o número 6 tem que ser baseado na quantidade
de valores da var cidade do tipo array

Incluir o último valor da var cidade na tag h2
*/