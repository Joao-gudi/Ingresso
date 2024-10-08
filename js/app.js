function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    console.log(`Tipo de ingresso selecionado: ${tipoIngresso}`);
    
    // Obtém a quantidade de ingressos que o usuário deseja comprar
    let quantidade = parseInt(document.getElementById('qtd').value);
    console.log(`Quantidade solicitada: ${quantidade}`);

    if(quantidade <= 0) {
        alert('Por Favor insira uma quantidade valida!');
        console.log(`Quantidade inserida não pode ser menor ou igual a zero: ${quantidade}`)
        return;
    } 

    // Verifica o tipo de ingresso e chama a função correspondente
    if (tipoIngresso === 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso === 'superior') {
        comprarSuperior(quantidade);
    } else if (tipoIngresso === 'inferior') {
        comprarInferior(quantidade);
    } else {
        alert('Tipo de ingresso inválido.');
    }
}

function comprarPista(quantidade) {
    // Obtém o elemento que contém a quantidade disponível de ingressos para a pista
    let quantidadePistaElement = document.getElementById('qtd-pista');
    // Converte a quantidade disponível de texto para número
    let quantidadePista = parseInt(quantidadePistaElement.textContent);
    console.log(`Quantidade disponível na pista: ${quantidadePista}`);

    // Verifica se a quantidade solicitada é maior que a disponível
    if (quantidade > quantidadePista) {
        alert('O valor informado é superior ao disponível');
    } else {
        // Subtrai a quantidade comprada da quantidade disponível
        quantidadePista -= quantidade;
        // Atualiza a quantidade disponível no elemento
        quantidadePistaElement.textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
        console.log(`Quantidade restante na pista: ${quantidadePista}`);
    }
}

function comprarSuperior(quantidade) {
    // Obtém o elemento que contém a quantidade disponível de ingressos para o setor superior
    let quantidadeSuperiorElement = document.getElementById('qtd-superior');
    // Converte a quantidade disponível de texto para número
    let quantidadeSuperior = parseInt(quantidadeSuperiorElement.textContent);
    console.log(`Quantidade disponível no setor superior: ${quantidadeSuperior}`);

    // Verifica se a quantidade solicitada é maior que a disponível
    if (quantidade > quantidadeSuperior) {
        alert('O valor informado é superior ao disponível');
    } else {
        // Subtrai a quantidade comprada da quantidade disponível
        quantidadeSuperior -= quantidade;
        // Atualiza a quantidade disponível no elemento
        quantidadeSuperiorElement.textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
        console.log(`Quantidade restante no setor superior: ${quantidadeSuperior}`);
    }
}

function comprarInferior(quantidade) {
    // Obtém o elemento que contém a quantidade disponível de ingressos para o setor inferior
    let quantidadeInferiorElement = document.getElementById('qtd-inferior');
    // Converte a quantidade disponível de texto para número
    let quantidadeInferior = parseInt(quantidadeInferiorElement.textContent);
    console.log(`Quantidade disponível no setor inferior: ${quantidadeInferior}`);

    // Verifica se a quantidade solicitada é maior que a disponível
    if (quantidade > quantidadeInferior) {
        alert('O valor informado é superior ao disponível');
    } else {
        // Subtrai a quantidade comprada da quantidade disponível
        quantidadeInferior -= quantidade;
        // Atualiza a quantidade disponível no elemento
        quantidadeInferiorElement.textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');
        console.log(`Quantidade restante no setor inferior: ${quantidadeInferior}`);
    }
}
