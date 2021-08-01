class Clientes {
    constructor() {
        this._clientes = new Array();
        const conta1 = new Conta("4", 500);
        const conta2 = new Poupanca("5", 100);
        const conta3 = new ContaBonificada("6", 50000);
        const cl1 = new Cliente("luciano", "123.456.789-01", conta1);
        const cl2 = new Cliente("joao", "124.456.789-05", conta2);
        const cl3 = new Cliente("gustavo", "125.456.789-06", conta3);
        this._clientes.push(cl1, cl2, cl3);
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const index = this.getIndex(cpf);
        if (index)
            this._clientes.splice(index, 1);
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
    getIndex(cpf) {
        return this._clientes.indexOf(this.pesquisar(cpf));
    }
}
