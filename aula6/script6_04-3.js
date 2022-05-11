var semana = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA","SEXTA", "SÁBADO"];
for (var i = 0; i < 7; i++){
    document.querySelector(".teste").innerHTML+=semana[i] + " é o " + (i+1) + "o dia da semana!<br>";
}
//document.write(semana[i] + " é o " + (i+1) + "o dia da semana!<br>");
/*

mudar o document.write para querySelector dentro do looping
*/