const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

var login=["admin","root"];
// document.write(login+"<hr>");
id_dv.innerHTML=login;
login.push("astrogildo");//login=["admin","root","astrogildo"];
// document.write(login+"<hr>");
class_teste.innerHTML=login;
login.unshift("belinha");//login=["belinha","admin","root","astrogildo"];
// document.write(login+"<hr>");
id_nome.value=login;