/*
2 ͦ Checkpoint de programação imperativa
Olá, você foi contratado para executar este projeto.
É importante que você analise, entenda o pedido do cliente
e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


    ## GRUPO 7 ##
    INTEGRANTES:
    > DAVI DUTRA
    > FELIPE ROCHA
    > FERNANDA LIMA
    > HARRY MÖBBS JÚNIOR
    > VINICIUS MACHADO RODRIGUES

    Endereço do git: https://github.com/harrymobbsjunior/Checkpoint.git

*/
console.log("### MENU ###");
console.log("1 - Pipoca – 10 segundos (padrão)");
console.log("2 - Macarrão – 8 segundos (padrão)");
console.log("3 - Carne – 15 segundos (padrão)");
console.log("4 - Feijão – 12 segundos (padrão)");
console.log("5 - Brigadeiro – 8 segundos (padrão)");
console.log(" ");

/*  Função para verificar o tempo informado pelo usuário comparando com o tempo padrão do prato selecionado.
    Caso usuário não informe um tempo, será considerado o tempo padrão do prato. */
function definirTempo(padrao, tempo = null) {
    if (tempo == null) {
        tempo = padrao;
    }

    if (tempo < padrao) {
        return "tempo insuficiente";

    } else if (tempo >= (padrao * 3)) {
        return "kabumm";

    } else if (tempo >= (padrao * 2)) {
        return "comida queimou";

    } else if (tempo >= padrao && tempo < (padrao * 2)) {
        return "Prato pronto, bom apetite!!!";
    }
}

/* Função principal, definindo o tipo de comida e o tempo de aquecimento. */
function menuComida(opcao, tempo) {
    let mensagem;

    if (opcao == 'Pipoca' || opcao == 1) {

        mensagem = definirTempo(10, tempo);

    } else if (opcao == 'Macarrão' || opcao == 2) {

        mensagem = "Comida Selecionada: Macarrão! " + definirTempo(8, tempo);

    } else if (opcao == 'Carne' || opcao == 3) {

        mensagem = "Comida Selecionada: Carne! " + definirTempo(15, tempo);

    } else if (opcao == 'Feijão' || opcao == 4) {

        mensagem = "Comida Selecionada: Feijão! " + definirTempo(12, tempo);

    } else if (opcao == 'Brigadeiro' || opcao == 5) {

        mensagem = "Comida Selecionada: Brigadeiro! " + definirTempo(8, tempo);

    } else {
        mensagem = "Prato inexistente";
    }

    console.log("## " + mensagem + " ##");
}

menuComida('Brigadeiro', 8);