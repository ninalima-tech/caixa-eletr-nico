function realizarOperacao() {
    const operacao = document.getElementById('operacao').value;
    const resultado = document.getElementById('resultado');

    let saldo = 1000; 

    if (isNaN(valor)) {
        resultado.textContent = "Valor inválido. Por favor, digite um número.";
        return;
    }

    switch (operacao) {
        case 'saldo':
            resultado.textContent = `Seu saldo atual é R$ ${saldo.toFixed(2)}`;
            break;
        case 'saque':
            if (valor > saldo) {
                resultado.textContent = "Saldo insuficiente.";
            } else {
                saldo -= valor;
                resultado.textContent = `Saque realizado com sucesso. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
            }
            break;
        case 'deposito':
            saldo += valor;
            resultado.textContent = `Depósito realizado com sucesso. Seu novo saldo é R$ ${saldo.toFixed(2)}`;
            break;
        default:
            resultado.textContent = "Operação inválida.";
    }
}