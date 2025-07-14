saldo = 1500

// Somar algo ao saldo

deposito = 100

function realizar_deposito (saldo, deposito){
    // ideia de nome da função
    // sempre que possivel esteja como um verbo para indicar a ação
    saldo = saldo + deposito
    console.log (saldo)
    return saldo
}

saldo = realizar_deposito (saldo, 10000)
// depois que define no function, você chama ela 
// executando embaixo
console.log (saldo)
//só vai mostrar o valor


// saldo = saldo + deposito

// saldo_futuro = saldo + deposito

// em computação
// saldo = saldo + deposito
// o saldo vai receber o valor da variavel saldo 
// e somar o valor da variável deposito
// saldo += deposito

