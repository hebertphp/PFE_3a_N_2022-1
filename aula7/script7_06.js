var x = 298;//escopo global
function par_impar() {
    document.write(x+"---");
    if (x % 2 == 0) {
        var msg = " PAR<br>";//escopo local/bloco
    }
    else {
        var msg = " ÍMPAR<br>";//escopo local/bloco
    }
    document.write("=="+msg);
}
par_impar();
document.write(x+"???");
document.write(msg);//não imprime o valor da var