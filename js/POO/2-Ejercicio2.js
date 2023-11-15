const cuentaBancaria = {
    saldo: 0,
    titular: 'Agustin Maza',
    depositar: function (deposito){
        if(!isNaN(deposito) && deposito > 0){
            this.saldo += deposito;
        }else{
            alert('Por favor ingrese un valor valido de deposito');
        } 
    },
    retirar: function (retiro){
        if(!isNaN(retiro) && retiro > 0){
            if(this.saldo >= retiro){
                this.saldo -= retiro;
            } else{
                alert(`Saldo insuficiente, su saldo actual es: $ ${this.saldo}`);
            }
        }else{
            alert('Por favor ingrese un valor valido de retiro');
        }
    },
    informar: function(){
        document.write(`<h2>Información de la cuenta bancaria</h2>`);
        document.write(`<h2>Titular: ${this.titular}</h2>`);
        document.write(`<h2>Su saldo actual es: $ ${this.saldo}</h2>`);
    }
}

const deposito = parseFloat(prompt('Ingrese la cantidad que desea depositar'));
cuentaBancaria.depositar(deposito);
const retirar = parseFloat(prompt('Ingrese la cantidad que desea retirar'));
cuentaBancaria.retirar(retirar);
cuentaBancaria.informar();