class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = new Clientes();
    }
    inserirDependente(cliente) {
        this.dependentes.inserir(cliente);
    }
    removerDependente(cpf) {
        this.dependentes.remover(cpf);
    }
    listarDependentes() {
        return this.dependentes.listar();
    }
    pesquisarDependente(cpf) {
        return this.dependentes.pesquisar(cpf);
    }
}
