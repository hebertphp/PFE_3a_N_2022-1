var n,nome;
n="João";
n="Abelardo";
n="Belarmina";
n="Pafuncio";
//      0        1         2           3
nome=["João","Abelardo","Belarmina","Pafuncio"];
// document.write(nome);

document.querySelector("#dv1").innerHTML=n;
document.querySelector(".teste").innerHTML=nome[0]+"<br>"+nome[1];
document.querySelector("h2").innerHTML=nome[2];