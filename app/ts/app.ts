let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

// CLIENTES

const clientes = new Clientes();

const c2 = new Conta("4",500);
const p2 = new Poupanca("5",100);
const cb2 = new ContaBonificada("6",50000);

const cliente1 = new Cliente( "luciano","123.456.789-01", c2 );
const cliente2 = new Cliente( "joao","124.456.789-05", p2 );
const cliente3 = new Cliente( "gustavo","125.456.789-06", cb2 );

clientes.inserir(cliente1);
clientes.inserir(cliente2);
clientes.inserir(cliente3);

console.log("--- LISTAR 1 ---");
console.table( clientes.listar() );
clientes.remover("124.456.789-05");

console.log("--- LISTAR 2 ---");
console.table( clientes.listar() );

console.log("--- PESQUISAR LUCIANO ---");
console.table( clientes.pesquisar("123.456.789-01") );
