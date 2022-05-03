var destino,aux;
destino=prompt("Digite seu destino: ");//São Paulo
aux=destino.toUpperCase();

switch (aux) {
    case "SÃO PAULO":
        document.write("Seja bem vindo a cidade que nunca para!");
    break;
    case "NEW YORK":
        document.write("Seja bem vindo a Big Apple!");
    break;
    default:
        document.write("Não encontramos seu destino!");
}
/*
1 - Cadastrar
2 - Consultar
3 - Excluir
4 - Sair
*/