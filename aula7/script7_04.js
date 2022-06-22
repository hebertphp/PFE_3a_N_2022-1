function soma(...num){
    var resultado=0;
    // resultado = num[0]+num[1]+num[2];
    for (i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    return resultado;
}
document.write(soma(20,17,3,5,12,3,4,5,7,4,23,1,34,6,87,89,9,1224,67,8,9));