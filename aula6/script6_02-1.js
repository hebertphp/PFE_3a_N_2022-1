var uf=["SP","RJ","MG","SC","AM","TO","PR","PA"];
//      0   1   2
var x=[2020,2,"Hoje"];

x[0]++;//x[0]=2021
x[1]=x[0]%2;//x[1]=2021%2//x[1]=1
x[2]+=" em dia";//x[2]="Hoje"+" em dia"//"Hoje em dia"
document.querySelector("#dv1").innerHTML=x[0]+"-"+x[1];
document.querySelector(".teste").innerHTML=x[2]+"-"+uf[5];
/*

x[0] e x[1] saída na área laranja
x[2] saída na área aqua.

document.write(x[0]+"<br>");
document.write(x[1]+"<br>");
document.write(x[2]+"<br>");
*/