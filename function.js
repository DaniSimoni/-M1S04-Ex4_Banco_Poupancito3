/* Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, que contém uma taxa de juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca criada anteriormente e modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% toda a vez que o método for chamado. */


class Conta {
    constructor(saldo, senha) { 
        this.saldo = saldo;
        this.senha = senha;
    } 

    deposito(total) { 
        if(this.senha === 1234){
          this.saldo += total;
          console.log(`Depósito de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
        }
    }
    
     retirada(total) {
        if(this.senha === 1234){
          this.saldo -= total;
          console.log(`Retirada de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
    }
  };
};
    
class Poupança extends Conta {
    constructor(saldo, senha) {
      super(saldo, senha);
 
    }
    atualizaJuros(total){

      if(this.senha === 1234){
  
      }else {
          console.log('Senha Incorreta');
     
    }
  };
};


class Premium extends Conta {
    constructor(saldo, senha){
      super (saldo, senha);
    }
      atualizaPremium(total) {

        if(this.senha === 1234){
  
        }else {
            console.log('Senha Incorreta');
       
      }
    };
};

    const cadastro = new Conta (0 , 1234);
    cadastro.deposito(20);
    cadastro.deposito(100);
    cadastro.deposito(30);
    cadastro.deposito(50);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(20);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(30);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.atualizaJuros;
    

    const newPoupança = new Poupança (cadastro.saldo * 100.7 / 100 , 1234);
    newPoupança.atualizaJuros();
    console.log(`O saldo com juros atualizado é de R$ ${newPoupança.saldo}`);

    const newPremium = new Premium (cadastro.saldo * 101.2 / 100 , 1234);
    newPremium.atualizaPremium();
    console.log(`O saldo com juros atualizado é de R$ ${newPremium.saldo}`);


