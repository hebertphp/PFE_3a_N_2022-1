const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

//       0     1     2
var x =[10,   20,   30];
//      0 0 1 2     1 0 1 2       20 1 2
var m = [[1,2,3]  ,  [4,5,6]  ,   [7,8,9]];

var uf=[["sp","rj"],["sc","mg"],["TO","Am","PA","PR"]];

id_dv.innerHTML=x[1];
class_teste.innerHTML=uf[2].length;