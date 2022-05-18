var signo=["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquario","Peixes"];
for(var i=0;i<signo.length;i++){
    document.querySelector("#signo").innerHTML+="<option>&#"+(9800+i) + signo[i]+"</option>";
}

/*
Desafio2:
De: 9800 até:9811
Mostrar o Emoji e o signo("string")
Criar um array com os signos
*/