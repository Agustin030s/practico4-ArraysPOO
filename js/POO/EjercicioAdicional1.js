const cuentaBancaria = {
    saldo: 4500,
    titular: 'Rolling Code',
    depositar: function (deposito){
        this.saldo += deposito;
        document.write(`<h2>Su saldo actual es: $ ${cuentaBancaria.saldo}</h2>`);
    },
    retirar: function (retiro){
        if(this.saldo >= retiro){
            this.saldo -= retiro;
            document.write(`<h2>Su saldo actual es: $ ${cuentaBancaria.saldo}</h2>`);
        } else{
            document.write(`<h2>Saldo insuficiente, su saldo actual es: ${this.saldo}</h2>`);
        }
    }
}

// const deposito = parseFloat(prompt('Ingrese la cantidad que desea depositar'));
// cuentaBancaria.depositar(deposito);
const retirar = parseFloat(prompt('Ingrese la cantidad que desea retirar'));
cuentaBancaria.retirar(retirar);