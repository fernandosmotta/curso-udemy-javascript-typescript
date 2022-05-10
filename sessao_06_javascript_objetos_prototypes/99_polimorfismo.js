//Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C.: ${this.agencia}/${this.conta} | Saldo.: R$ ${this.saldo.toFixed(2)}`);
}


//CONTA CORRENTE
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}


//CONTA POUPANÇA
function ContaPoupanca(agencia, conta, valor) {
    Conta.call(this, agencia, conta, valor);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;




const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(20);
conta1.sacar(2);

console.log();

const cc = new ContaCorrente(123, 1234, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca(321, 9999, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);