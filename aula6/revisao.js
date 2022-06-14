const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");
//       0  1  2  3
var x = [20,40,60,80];
//        0       1        2
var y =[[3,4],[5,6,7,20],[8,9]];
//       0 1   0 1 2 3    0 1
id_dv.innerHTML=x.length;
class_teste.innerHTML=y[1].length;