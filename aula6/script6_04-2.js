var meses,i;
//       0     1     2     3     4
meses=["Jan","Fev","Mar","Abr","Mai"];
for(i=2;i<5;i++){
  document.querySelector("#dv1").innerHTML+=meses[i]+" ";
}

/*
Criar um looping para mostrar os valores:
2 3 4
E direcionar a saída para <div id="dv1">

Valor inicial: i=2
Condição: i<5 ou i<=4
Contador: i++

*/
