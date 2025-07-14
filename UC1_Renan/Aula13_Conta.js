// O que a conta tem?
// # conta, titular, saldo, extrato
// --------------------------------------
// O que eu posso fazer na conta?
// sacar, depositar, extrato, transferir

class Conta{
    constructor (titular, numConta, saldo=0){
        // this -> palavra reservada para indicar
        // que a variável/função pertence 
        // à classe em questão
        this.titular = titular
        this.numConta = numConta
        this.saldo = saldo
        this.extrato = []
    }
    depositar (valor){
        if (valor > 0){
            this.saldo = this.saldo + valor
            this.extrato.push ("Deposito realizado com sucesso")
        }
    }
    // caminhos tristes
    sacar (valor){
        if (valor <= 0){
            console.log ("Digite um valor válido")
        }
        else if (valor > this.saldo){
            console.log ("Não há saldo suficiente")
        }
        // aqui realiza o saque
        else{
            this.saldo = this.saldo - valor
            this.extrato.push ("O saque foi realizado")
        }
    }
    // transferencia
    transf (valor, conta){
        this.extrato.push ("Inicio da transferencia")
        this.sacar (valor)
        conta.depositar (valor)
        this.extrato.push ("Fim da transferencia")
    }
    gerarExtrato (){
        this.extrato.forEach (operacao => {
            console.log (operacao + '\n')
        });

    }

}

conta1 = new Conta ('Carolina', '10235', 100)
console.log (conta1.saldo)

conta1.depositar (50)
console.log (conta1.saldo)

conta1.sacar (50)

conta2 = new Conta ('Senac', '23656', 500)
conta1.transf (50, conta2)
console.log (conta1.saldo)

conta1.gerarExtrato ()
