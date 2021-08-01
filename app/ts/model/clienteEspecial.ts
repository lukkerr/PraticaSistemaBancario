class ClienteEspecial extends Cliente {

    private dependentes : Clientes;

    constructor (nome: string, cpf: string, conta: Conta) {
        super(nome, cpf, conta);
        this.dependentes = new Clientes();
    }

    inserirDependente (cliente : Cliente) : void {
        this.dependentes.inserir(cliente);
    }

    removerDependente (cpf: string) : void {
        this.dependentes.remover(cpf);
    }

    listarDependentes () : Array<Cliente> {
        return this.dependentes.listar();
    }

    pesquisarDependente (cpf : string) : Cliente {
        return this.dependentes.pesquisar(cpf);
    }
}